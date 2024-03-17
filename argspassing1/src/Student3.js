import React, { Component } from "react";

export default class Student3 extends Component {
  handleClick(roll, name) {
    console.log(roll, name);
  }
  render() {
    return (
      <div>
        <p>
          Hello {this.props.name},your roll no. is {this.props.roll}
          <button
            onClick={this.handleClick.bind(
              this,
              this.props.name,
              this.props.roll
            )}
          >
            Click me
          </button>
        </p>
      </div>
    );
  }
}
