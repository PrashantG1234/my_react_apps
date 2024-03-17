import React, { Component } from "react";
import ShoppingCart from "./ShoppingCart";
import Student1 from "./Student1";
import Student2 from "./Student2";
import Student3 from "./Student3";
export default class App extends Component {
  render() {
    return (
      <div>
        <Student1 />
        <Student2 />
        <Student3 name="Rohit" roll={102} />
        <ShoppingCart items={["OnePlus-Mobile", "Fast Track-Watch"]} />
      </div>
    );
  }
}
