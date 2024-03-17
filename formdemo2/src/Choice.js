import React, { Component } from "react";

export default class Choice extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: "Indian",
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange(e) {
    this.setState({ value: e.target.value });
  }
  handleSubmit(e) {
    e.preventDefault();
    this.state.value === "Indian"
      ? alert("Great Choice ")
      : alert("Bad Choice ");
  }
  render() {
    return (
      <div style={{ textAlign: "center" }}>
        <h3>Pick your favourite food</h3>
        <form onSubmit={this.handleSubmit}>
          <select id="favFood" onChange={this.handleChange}>
            <option value={"Indian"}>Indian</option>
            <option value={"muglai"}>Muglai</option>
            <option value={"chineese"}>Chineese</option>
          </select>
          <br />
          <button>choose</button>
        </form>
      </div>
    );
  }
}
