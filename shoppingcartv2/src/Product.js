import React, { Component } from "react";
import "./Product.css";
export default class Product extends Component {
  handleClick = (e) => {
    this.props.remove(this.props.item, e);
  };
  render() {
    console.log("Product Component render() called.");
    return (
      <tr className="Product">
        <td>{this.props.item.itemName}</td>
        <td>{this.props.item.qty}</td>
        <td>
          <button onClick={this.handleClick}>Delete</button>
        </td>
      </tr>
    );
  }
}
