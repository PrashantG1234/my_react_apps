import React, { Component } from "react";
import "./Product.css";
export default class Product extends Component {
  handleClick = (e) => {
    this.props.remove(this.props.lists, e);
  };
  render() {
    return (
      <div>
        <li className="Product">
          <span>{this.props.lists}</span>
          <button onClick={this.handleClick}>Delete</button>
        </li>
      </div>
    );
  }
}
