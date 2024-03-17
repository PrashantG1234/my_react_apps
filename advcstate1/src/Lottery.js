import React, { Component } from "react";
import "./Lottery.css";
import Balls from "./Balls";
export default class Lottery extends Component {
  static defaultProps = {
    title: "Lotto",
    numBalls: 6,
    maxValue: 50,
  };
  constructor(props) {
    super(props);
    let arr = Array.from({ length: this.props.numBalls });
    this.state = {
      numsArr: arr,
    };
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick() {
    let brr = [];
    for (let i = 0; i < this.props.numBalls; i++) {
      brr[i] = Math.floor(Math.random() * this.props.maxValue + 1);
    }
    this.setState({
      numsArr: brr,
    });
  }
  render() {
    let ballsArr = this.state.numsArr.map((n) => {
      return <Balls num={n} />;
    });
    return (
      <div className="Lottery">
        <h1>{this.props.title}</h1>
        <div>{ballsArr}</div>
        <button onClick={this.handleClick}>Generate Nums</button>
      </div>
    );
  }
}
