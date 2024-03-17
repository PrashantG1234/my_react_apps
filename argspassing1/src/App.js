import React, { Component } from "react";
import Student1 from "./Student1";
import Student2 from "./Student2";
import Student3 from "./Student3";
export default class App extends Component {
  render() {
    return (
      <div>
        <Student1 roll={101} name="Amit" />
        <Student1 roll={102} name="Sumit" />
        <Student2 roll={101} name="Amit" />
        <Student2 roll={102} name="Sumit" />
        <Student3 roll={101} name="Amit" />
        <Student3 roll={102} name="Sumit" />
      </div>
    );
  }
}
