import React, { Component } from "react";

export default class ShoppingCart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: this.props.items,
      total: this.props.items.length,
    };
    setTimeout(() => {
      this.updateCart();
    }, 5000);
  }
  updateCart = () => {
    let newItems = [...this.state.items, "Dell Inspiron-Laptop"];
    let newTotal = newItems.length;
    this.setState({
      items: newItems,
      total: newTotal,
    });
  };
  render() {
    return (
      <div>
        <h2>Your Cart Details</h2>
        <h4>Product Details: {this.state.items.join()}</h4>
        <h4>Product Counting: {this.state.total}</h4>
      </div>
    );
  }
}
