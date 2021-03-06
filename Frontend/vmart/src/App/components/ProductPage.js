import React, { Component } from "react";
import { Helmet } from "react-helmet";
import { BACKEND_URL } from "../config/Config";
import renderHTML from "react-render-html";
import axios from "axios";

export default class ProductPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: decodeURI(this.props.match.params.pName),
      pID: this.props.match.params.pID,
      category: "",
      images: [],
      specs: [],
      price: "",
      sellPrice: "",
      offer: "",
      description: "",
      sellerID:"",
      sellerName:"",
      promiseIsResolved: false,
    };

    this.getProductDetails = this.getProductDetails.bind(this);
    this.gallView = this.gallView.bind(this);
    this.specView = this.specView.bind(this);
    this.sellerView=this.sellerView.bind(this);
  }

  componentDidMount() {
    this.getProductDetails();
  }

  getProductDetails() {
    console.log(this.state.pID);
    console.log(this.state.name);
    if (!this.state.promiseIsResolved) {
      axios
        .post(BACKEND_URL + `/prod?prod_id=${this.state.pID}`)
        .then((response) => {
          this.responseController(response);
        })
        .catch((error) => {
          console.log(error);
        });
    }
  }

  gallView() {
    var retView = "";
    for (var i = 0; i < this.state.images.length; i++) {
      retView +=
        '<img className="gall_image" src=' + this.state.images[i] + "></img>";
      if ((i + 1) % 2 === 0) {
        retView += "<br/>";
      }
    }
    return retView;
  }

  specView() {
    var retView = "";
    retView += (
      '<table>'
      +'<tr>');
    for (var i = 0; i < this.state.specs.length; i++) {
      retView+='<td>';
      retView +=
        '<label className="textSpecHead">' +
        this.state.specs[i].split(":")[0].trim() +
        "</label><br/>";
      retView +=
        '<label className="textSpecBody">' +
        this.state.specs[i].split(":")[1].trim() +
        "</label><br/>";
        retView+='</td>';  
        if((i+1)%2===0)
            {
                retView+=('</tr><tr>');
            }
    }
    retView+=('</tr>');
    retView+=('</table>');
    return retView;
  }

  sellerView() {
    var retView = "";
    retView +=
    '<label className="textSpecParHead">Product Code: </label>';
  retView +=
    '<label className="textSpecBody">' +
    this.state.pID +
    "</label><br/>";
    retView +=
    '<label className="textSpecParHead">Sold by: </label>';
  retView +=
    '<label className="textSpecBody">' +
    this.state.sellerName +
    "(verified)</label>";
    return retView;
  }

  responseController(response) {
    if (response.status === 200) {
      if (
        response.data.status === "error" &&
        response.data.message === "product_not_found"
      ) {
        console.log("product not found");
      } else if (
        response.data.status === "success" &&
        response.data.message === "product_found"
      ) {
        console.log(response.data);
        this.setState({
          category: response.data.category,
          price: response.data.price,
          sellPrice: Math.round(response.data.price * response.data.discount),
          offer: Math.round((1 - response.data.discount) * 100),
          description: response.data.description,
          sellerID: response.data.sellerID,
          sellerName: response.data.sellerName,
        });
        for (var i = 0; i < response.data.pictures.length; i++) {
          this.setState({
            images: [...this.state.images, response.data.pictures[i].url],
          });
        }
        for (var j = 0; j < response.data.specifications.length; j++) {
          this.setState({
            specs: [...this.state.specs, response.data.specifications[j].spec],
          });
        }
        this.setState({
          ...this.state,
          promiseIsResolved: true,
        });
      }
    }
  }

  render() {
    if (!this.state.promiseIsResolved) {
      return null;
    } else {
      return (
        <div className="ProductPage">
          <Helmet>
            <title>Buy {this.state.name} | VMart</title>
          </Helmet>
          <br />
          <br />
          <label className="blackHeadlbl">
            {this.state.category} > {this.state.name}
          </label>
          <br />
          <br />
          <div className="img_grid">{renderHTML(this.gallView())}</div>
          <div className="prod_details">
            <label className="blackHeadlbl">{this.state.name}</label>
            <br />
            <label className="textgreyH1">{this.state.description}</label>
            <br />
            <br />
            <label className="blackHeadlbl">₹ {this.state.sellPrice}</label>
            <label className="textgreyH1_strikethrough">
              ₹ {this.state.price}
            </label>
            <label className="textofferBig">({this.state.offer}% OFF)</label>
            <br />
            <label className="textTaxesSmall">inclusive of all taxes</label>
            <br />
            <hr/>
            <br />
            <label className="blackH1lbl">Specifications</label>
            <br />
            {renderHTML(this.specView())}
            <br />
            <hr/>
            <br />
            {renderHTML(this.sellerView())}
          <br />
          <br />
          </div>
        </div>
      );
    }
  }
}
