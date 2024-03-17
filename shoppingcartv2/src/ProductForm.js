import React, { Component } from "react";
import "./ProductForm.css";
export default class ProductForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      itemName: "",
      qty: "",
    };
  }
  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.add(this.state);
    this.setState({
      itemName: "",
      qty: "",
    })
  };
  render() {
    return (
      <div className="ProductForm">
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="itemname">Item Name</label> <br />
          <input
            id="itemname"
            type="text"
            name="itemName"
            value={this.state.itemName}
            onChange={this.handleChange}
          />
          <br />
          <label htmlFor="qty">Quantity</label>
          <br />
          <input
            id="qty"
            type="text"
            name="qty"
            value={this.state.qty}
            onChange={this.handleChange}
          />
          <br />
          <button type="submit">Add to cart</button>
        </form>
      </div>
    );
  }
}
