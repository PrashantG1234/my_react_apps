import React, { Component } from "react";
import ChildA from "./ChildA";

export default class ParentA extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "Prashant",
    };
    console.log("ParentA Component constructor called.");
  }
  changeState = () => {
    console.log("Clicked the button");
    this.setState({ name: "Prashant gupta" });
  };
  static getDerivedStateFromProps(props, state) {
    console.log("ParentA component getDerivedStateFromProps() called");
    return null;
  }
  shouldComponentUpdate(nextProps, nextState) {
    console.log("Parent Component shouldComponentUpdate() Called");
    return true;
  }
  getSnapshotBeforeUpdate(prevProps, prevUpdate) {
    console.log("Parent Component getSnapshptBeforeUpdate() Called");
    return null;
  }
  componentDidUpdate(prevProps, prevState, snapShot) {
    console.log("Parent Component componentDidUpdate() Called");
  }

  render() {
    console.log("ParentA component render() called");
    return (
      <div>
        <h2>Parent:{this.state.name}</h2>
        <ChildA />
        <button onClick={this.changeState}>change state</button>
      </div>
    );
  }
  componentDidMount() {
    console.log("ParentA component componentDidMount() called");
  }
}
