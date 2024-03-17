import React, { Component } from "react";
import CreateTask from "./CreateTask.js";
import "./Main.css";
import "./CreateTask.css";
import TaskList from "./TaskList.js";
export default class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tasks: [],
    };
  }
  addTask = (task) => {
    if (task === "") {
      alert("Task is Empty");
      return;
    }
    let newTask = { taskName: task, isCompleted: false };
    let arr = [...this.state.tasks, newTask];
    this.setState({ tasks: arr });
  };
  toggleTask = (index) => {
    let arr = [...this.state.tasks];
    arr[index].isCompleted = !arr[index].isCompleted;
    this.setState({ tasks: arr });
  };
  editTask = (taskStr, index) => {
    let arr = [...this.state.tasks];
    arr[index].taskName = taskStr;
    this.setState({ tasks: arr });
  };
  deleteTask = (index) => {
    let arr = this.state.tasks.filter((task, id) => index !== id);
    this.setState({ tasks: arr });
  };

  render() {
    return (
      <div className="Main">
        <h1>Todo List</h1>
        <div className="CreateTask">
          <CreateTask add={this.addTask} />
        </div>
        <div>
          <TaskList
            tasks={this.state.tasks}
            deleteTask={this.deleteTask}
            editTask={this.editTask}
            toggleTask={this.toggleTask}
          />
        </div>
      </div>
    );
  }
}
