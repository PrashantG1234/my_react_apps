import React, { Component } from "react";
import "./task.css";
export default class Task extends Component {
  constructor(props) {
    super(props);
    this.state = { newTask: this.props.task.taskName, isEdited: false };
  }
  handleToggle = () => {
    this.props.toggleTask(this.props.index);
  };
  setIsEdited = (edited) => {
    this.setState({ isEdited: edited });
  };
  handleChange = (e) => {
    this.setState({ newTask: e.target.value });
  };
  handleDelete = () => {
    this.props.deleteTask(this.props.index);
  };
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.editTask(this.state.newTask, this.props.index);
  };
  handleBack = () => {
    this.setState({ newTask: this.props.task.taskName });
    this.setIsEdited(false);
  };
  render() {
    let result;
    if (this.state.isEdited) {
      result = (
        <tr>
          <td colSpan={2}>
            <form onSubmit={this.handleSubmit}>
              <input
                className="input"
                type="text"
                value={this.state.newTask}
                onChange={this.handleChange}
              />
              <button className="save task" type="submit">
                Save
              </button>
              <button
                className="back task"
                type="button"
                onClick={this.handleBack}
              >
                Back
              </button>
            </form>
          </td>
        </tr>
      );
    } else {
      result = (
        <tr>
          <td onClick={this.handleToggle} className="task">
            <input type="checkbox" checked={this.props.task.isCompleted} />
            <span
              className={this.props.task.isCompleted === true ? "yes" : "no"}
            >
              {this.props.task.taskName}
            </span>
          </td>
          <td>
            <button
              className="edit task"
              onClick={() => {
                this.setIsEdited(true);
              }}
            >
              Edit
            </button>
            <button className="delete task" onClick={this.handleDelete}>
              Delete
            </button>
          </td>
        </tr>
      );
    }
    return result;
  }
}
