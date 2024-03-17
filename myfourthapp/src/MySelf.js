import React, { Component } from "react";
import sachin from "./sachin.jpg";
import "./MySelf.css"
export default class MySelf extends Component {
  render() {
    return (
      <div className="MySelf">
        <p>This is me</p>
        <img src={sachin} alt="sachin" />
        //second way
        <img src={require("./sachin.jpg")} alt="sachin" />
      </div>
    );
  }
}
