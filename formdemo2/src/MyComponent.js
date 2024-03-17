import React, { Component } from "react";
import MyInput from "./MyInput";

export default class MyComponent extends Component {
  constructor(props) {
    super(props);
    this.compRef = React.createRef();
  }
  handleClick = () => {
    this.compRef.current.setFocus();
  };

  render() {
    return (
      <div>
        <MyInput ref={this.compRef} />
        <button onClick={this.handleClick}>submit</button>
      </div>
    );
  }
}
