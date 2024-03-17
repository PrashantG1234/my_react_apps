import React, { Component } from "react";
import MyInput1 from "./MyInput1";

export default class MyComponent1 extends Component {
  constructor(props) {
    super(props);
    this.compRef = React.createRef();
  }
  handleClick = () => {
    if (!this.compRef.current.checkContent()) {
      alert("text is empty");
    } else {
      this.compRef.current.selectText();
    }
  };
  render() {
    return (
      <div>
        <MyInput1 ref={this.compRef} />
        <button onClick={this.handleClick}>Select Text</button>
      </div>
    );
  }
}
