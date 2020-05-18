import React, { Component } from "react";
import { BACKEND_URL } from "../config/Config";
import axios from "axios";
import ProductCard from "./ProductCard";

export default class ProductsCategory extends Component {
  constructor(props) {
    super(props);

    this.state = {
      catID: this.props.match.params.catID,
      promiseIsResolved: false,
    };
    this.getProducts = this.getProducts.bind(this);
  }

  componentDidMount() {
    this.getProducts();
  }

  getProducts() {
    if (!this.state.promiseIsResolved) {
      axios
        .get(BACKEND_URL + `/products?cat_id=` + this.state.catID)
        .then((response) => {
          this.responseController(response);
        })
        .catch((error) => {
          console.log(error);
        });
    }
  }

  responseController(response) {
    if (response.status === 200) {
      if (
        response.data.status === "error" &&
        response.data.message === "no_products_found"
      ) {
        console.log("products not found");
      } else if (
        response.data.status === "success" &&
        response.data.message === "products_found"
      ) {
        for (var i = 0; i < response.data.products.length; i++) {
          console.log(response.data.products[i]);
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
        <div className="ProductsCategory">
          <ProductCard
            image="https://assets.myntassets.com/h_1440/v1/assets/images/1700944/2019/6/8/ec064f55-1640-4bdb-92f2-b1b22cb190391559989322722-HRX-by-Hrithik-Roshan-Men-Yellow-Printed-Round-Neck-T-Shirt--5.jpg"
            name="HRX by Hrithik Roshan"
            price="699"
            discount="0.8"
          />
        </div>
      );
    }
  }
}
