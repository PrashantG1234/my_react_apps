// for functional component
// export default function App() {
//   return <h1>Hey There!!</h1>;
// }
// for class component
import React, { Component } from "react";
import Fruit from "./Fruit.js";
export default class App extends Component {
  render() {
    return (
      <div>
        <Fruit />
      </div>
    );
  }
}
