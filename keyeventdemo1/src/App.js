import React, { Component } from "react";
// import KeyDetector from "./KeyDetector";
import KeyGen from "./KeyGen";
export default class App extends Component {
  render() {
    return (
      <div style={{textAlign:"center"}}>
        {/* <KeyDetector /> */}
        <KeyGen/>
      </div>
    );
  }
}
