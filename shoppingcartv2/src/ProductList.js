import React, { Component } from "react";
import "./ProductList.css";
import Product from "./Product";
import ProductForm from "./ProductForm";
export default class ProductList extends Component {
  constructor(props) {
    super(props);
    this.state = { itemList: this.props.items };
  }
  handleClick = (listName, e) => {
    let arr = this.state.itemList.filter((x) => x !== listName);
    this.setState({ itemList: arr });
  };
  handleCart = (itemObj) => {
    let qty = Number(itemObj.qty);
    let allItems = [...this.state.itemList];
    // let found = false;
    // for (let item of allItems) {
    //   if (
    //     itemObj.itemName.trim().toLowerCase() === item.itemName.toLowerCase()
    //   ) {
    //     item.qty += qty;
    //     found = true;
    //     break;
    //   }
    // }
    // if (!found) {
    //   allItems.push(itemObj);
    // }
    let searchItem = allItems.find((item) => {
      return (
        itemObj.itemName.trim().toLowerCase() === item.itemName.toLowerCase()
      );
    });
    if (!searchItem) {
      allItems.push(itemObj);
    } else {
      searchItem.qty += qty;
    }
    this.setState({ itemList: allItems });
  };
  render() {
    console.log("ProductList Component render() called.");
    return (
      <div className="ProductList">
        <h1>Your shopping cart</h1>
        <table>
          <tbody>
            {this.state.itemList.map((list) => {
              return (
                <Product
                  item={list}
                  remove={this.handleClick}
                  key={list.itemName}
                />
              );
            })}
          </tbody>
        </table>
        <hr />
        <h1>Add New Product</h1>
        <ProductForm add={this.handleCart} />
      </div>
    );
  }
}
