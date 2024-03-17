import React, { Component } from 'react'

export default class Student1 extends Component {
    state={
        name:"Amit",
        roll:101
    }
  render() {
    return (
      <div>
        <p>Name is: {this.state.name}</p>
        <p>Name is: {this.state.roll}</p>
      </div>
    )
  }
}
