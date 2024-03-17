import React, { Component } from "react";

export default class MyInput1 extends Component {
  constructor(props) {
    super(props);

    this.inputRef = React.createRef();
  }
  checkContent() {
    if (this.inputRef.current.value.length === 0) {
      return false;
    } else {
      return true;
    }
  }
  selectText() {
    this.inputRef.current.select();
  }
  render() {
    return (
      <div>
        <input ref={this.inputRef} />
      </div>
    );
  }
}
