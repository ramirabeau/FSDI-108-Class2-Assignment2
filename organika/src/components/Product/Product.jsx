import React, { Component } from "react";
import QuantityPicker from "../QntPicker/QntPicker";
import "./Product.css";

class Product extends Component {
  state = {};
  render() {
    return (
      <div className="Product">
        <img className="prod-img" src="https://picsum.photos/250/300" alt="" />
        <label className="prod-desc">Description Here</label>
        <label className="prod-total">Total</label>
        <label className="prod-price">Price</label>
        <QuantityPicker></QuantityPicker>
        <button className="prod-btn">Add</button>
      </div>
    );
  }
}

export default Product;
