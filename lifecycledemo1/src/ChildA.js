import React, { Component } from "react";

export default class ChildA extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "Prashant",
    };
    console.log("Child Component constructor called.");
  }
  static getDerivedStateFromProps(props, state) {
    console.log("Child component getDerivedStateFromProps() called");
    return null;
  }
  shouldComponentUpdate(nextProps, nextState) {
    console.log("Child Component shouldComponentUpdate() Called");
    return true;
  }
  getSnapshotBeforeUpdate(prevProps, prevUpdate) {
    console.log("Child Component getSnapshptBeforeUpdate() Called");
    return null;
  }
  componentDidUpdate(prevProps, prevState, snapShot) {
    console.log("Child Component componentDidUpdate() Called");
  }

  render() {
    console.log("Child component render() called");
    return (
      <div>
        <h2>Child</h2>
      </div>
    );
  }
  componentDidMount() {
    console.log("Child component componentDidMount() called");
  }
}
