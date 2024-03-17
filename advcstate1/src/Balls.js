import React, { Component } from "react";
import Lottery from "./Lottery";
import "./Balls.css";
export default class Balls extends Component {
  render() {
    return <div className="Ball">{this.props.num}</div>;
  }
}
