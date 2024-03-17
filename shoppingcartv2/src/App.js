import React, { Component } from "react";
import ProductList from "./ProductList";
export default class App extends Component {
  render() {
    return (
      <div>
        <ProductList
          items={[
            { itemName: "JBL Earphones", qty: 2 },
            { itemName: "PoleStar BackPlus", qty: 3 },
            { itemName: "One Plus 12", qty: 2 },
            { itemName: "Apple I-Phone 15", qty: 4 },
            { itemName: "Cannon DSLR", qty: 2 },
            { itemName: "Dettol N 95 Mask", qty: 6 },
          ]}
        />
      </div>
    );
  }
}
