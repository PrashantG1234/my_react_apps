import React, { Component } from "react";

export default class MyInput extends Component {
  constructor(props) {
    super(props);
    this.childRef = React.createRef();
  }
  setFocus() {
    this.childRef.current.focus();
  }
  render() {
    return (
      <div>
        <input type="text" ref={this.childRef} />
      </div>
    );
  }
}
