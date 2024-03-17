import React, { Component } from "react";
import { choice, remove } from "./helper";
import foods from "./Food";
export default class Hello extends Component {
  render() {
    let selFruit = choice(foods);
    let remainingFruits = remove(foods, selFruit);
    return (
      <div>
        <p>Total fruits: {foods.length}</p>
        <p>They are: {foods.join()}</p>
        <p>Choosen fruit: {selFruit}</p>
        <p>remaining fruits: {remainingFruits.length}</p>
        <p>They are: {remainingFruits.join()}</p>
      </div>
    );
  }
}
