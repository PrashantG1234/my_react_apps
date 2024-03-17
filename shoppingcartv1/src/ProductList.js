import React, { Component } from "react";
import "./ProductList.css";
import Product from "./Product";
export default class ProductList extends Component {
  constructor(props) {
    super(props);

    this.state = { itemList: this.props.items };
  }
  handleClick = (listName, e) => {
    console.log(listName);
    let arr = this.state.itemList.filter((x) => x !== listName);
    this.setState({ itemList: arr });
  };
  render() {
    return (
      <div className="ProductList">
        <h1>Available Product</h1>
        <hr />
        <ul>
          {this.state.itemList.map((item) => {
            return (
              <Product lists={item} remove={this.handleClick} key={item} />
            );
          })}
        </ul>
      </div>
    );
  }
}
