import React, { Component } from "react";
export default class CreateTask extends Component {
  constructor(props) {
    super(props);
    this.state = {
      task: "",
    };
  }
  handleChange = (e) => {
    this.setState({ task: e.target.value });
  };
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.add(this.state.task.trim());
    this.setState({ task: "" });
  };
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          className="input"
          type="text"
          name="task"
          value={this.state.task}
          onChange={this.handleChange}
        />
        <button type="submit">Add Task</button>
      </form>
    );
  }
}
