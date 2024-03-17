import React, { Component } from "react";

export default class KeyDetector extends Component {
  constructor(props) {
    super(props);

    this.state = {
      key: "",
      code: "",
    };
  }

  handleKey = (e) => {
    this.setState({ key: e.key, code: e.code });
  };
  render() {
    return (
      <div>
        <form>
          <h1>Key Detector</h1>
          <h3>
            key: {this.state.key}, code: {this.state.code}
          </h3>
          <input
            type="text"
            placeholder="type something"
            onKeyDown={this.handleKey}
          />
        </form>
      </div>
    );
  }
}
