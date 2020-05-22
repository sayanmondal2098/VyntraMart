import React from "react";
import { Helmet } from "react-helmet";
import logo from "../..//..//Assects//img//vmart-logo.png";
import { BACKEND_URL } from "../../config/Config";

import axios from "axios";


class SellerAddProduct extends React.Component {
  constructor(props) {
    super(props);
    const sess_token = localStorage.getItem("session_token");
    let loggedIn = true;
    if (sess_token == null) {
      loggedIn = false;
    }
    this.state = {
      name: "",
      price : "",
      sellername: localStorage.getItem("sname"),
      descreption:"",
      catName:[],
      percentage:"",
      specefecation: "",
      loggedIn
    };

  }

  handleProductNameChange = (event) => {
    this.setState({
      name: event.target.value,
    });
  };


  handlePriceChange = (event) => {
    this.setState({
      price: event.target.value,
    });
  };

  handleProductDescreptionChange = (event) => {
    this.setState({
      descreption: event.target.value,
    });
  };

  // handleProductcatNameChange = (event) => {
  //   this.setState({
  //     catName: event.target.value,
  //   });
  // };

  handleProductpercentageChange = (event) => {
    this.setState({
      percentage: event.target.value,
    });
  };

  handleProductspecefecationChange = (event) => {
    this.setState({
      specefecation : event.target.value,
    });
  };


  componentDidMount(){
    this.setState({
      catName: this.getallcategory()
    })
    // this.getallcategory();
    console.log(this.state.catName)
  }

  getallcategory(){
    let list = []
    axios.get(BACKEND_URL+ `/allCategory`)
    .then((res)=> {
      var cat = res['data']['categories']
      var catlen = cat.length
      console.log(catlen)
    console.log(res)
    for (let index = 0; index < catlen; index++) {
      const element = cat[index]["catName"];
      list.push(element)
    }
      console.log( list)
      return list
    },console.log(list),
    this.setState({
      catName: [...this.state.catName,list],
  }),console.log(this.state.catName)
    )
    .catch((e)=>{
      console.log(e)
    })
}


  addProduct(){
    axios
      .post(BACKEND_URL + `/SellerAddProduct?name=${this.state.name}&price=${this.state.price}&sellername=${this.state.sellername}`+
                  `&descreption=${this.state.descreption}&catName=${this.state.catName}&percentage=${this.state.percentage}&specification=${this.state.specefecation}`)
  }


  handleSubmit(e) {
    console.log(this.state.name)
    this.addProduct()
  }

  render(){
    // let catlists = 
    // const catName = this.state.catName.map(function(catname, i) {
    //   return <li key={i}>{catname.catName}</li>
    // });

    return(
      <div className="Login">
        <Helmet>
          <title>VMart Seller AddProducts</title>
        </Helmet>
        <div className="head">
          <img className="head_logo" src={logo} alt="Logo" />
        </div>
        <div className="form_container">
          <div className="form_head">Seller Add Product</div>
          <br />
          <form onSubmit={this.handleSubmit}>
            <label className="form">
              <b>Product Name</b>
            </label>
            <br />
            <input
              className="form_ed"
              type="name"
              onKeyDown={this.txt_tracker}
              maxLength="64"
              name="name"
              id="name"
              value={this.state.name}
              onChange={this.handleProductNameChange}
            />
            <br />
            <label className="form_error" id="err_name"></label>
            <br />
            <label className="form">
              <b>Price</b>
            </label>
            <br />
            <input
              className="form_ed"
              type="name"
              onKeyDown={this.txt_tracker}
              maxLength="24"
              name="price"
              id="price"
              value={this.state.price}
              onChange={this.handlePriceChange}
            />
            <br />
            <br />
            <label className="form_error" id="err_name"></label>
            <br />
            <label className="form">
              <b>Descreption</b>
            </label>
            <br />
            <input
              className="form_ed"
              type="text"
              onKeyDown={this.txt_tracker}
              maxLength="1024"
              name="descreption"
              id="password"
              value={this.state.descreption}
              onChange={this.handleProductDescreptionChange}
            />
            <br />
            <br />
            <label className="form_error" id="err_name"></label>
            <br />
            <label className="form">
              <b>Catarory Name (Modify It TO DROP DOWN )</b>
            </label>
            <br />
            {/* <input
              className="form_ed"
              type="password"
              onKeyDown={this.txt_tracker}
              maxLength="1024"
              name="password"
              id="password"
              value={this.state.catName}
              onChange={this.handleProductcatNameChange}
            /> */}
            
            <select>
                {/* {catName} */}
            </select>
            <br />
            <br />
            <label className="form_error" id="err_name"></label>
            <br />
            <label className="form">
              <b>percentage (Modify )</b>
            </label>
            <br />
            <input
              className="form_ed"
              type="name"
              onKeyDown={this.txt_tracker}
              maxLength="1024"
              name="password"
              id="password"
              value={this.state.percentage}
              onChange={this.handlePasswordChange}
            />
            <br />
            <br />
            <label className="form_error" id="err_name"></label>
            <br />
            <label className="form">
              <b>Specefecation</b>
            </label>
            <br />
            <input
              className="form_ed"
              type="password"
              onKeyDown={this.txt_tracker}
              maxLength="1024"
              name="password"
              id="password"
              value={this.state.specefecation}
              onChange={this.handleProductspecefecationChange}
            />
            <br />
            <label className="form_error" id="err_password"></label>
            <br />
            <input className="form_btn" type="submit" value="Continue" />
            
          </form>
          <button href="/SellerDashBoard">Back</button>
          <br />
          <br />
        </div>
      </div>
    )
  }


}

export default SellerAddProduct;