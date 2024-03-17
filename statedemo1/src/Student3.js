import React, { Component } from 'react'

export default class Student3 extends Component {
    constructor(props) {
        super(props);
        this.state = {
          name: "amit",
          roll: 101,
        };
      }
      render() {
        return <div>
            <p>Name is: {this.state.name}</p>
            <p>Name is: {this.state.roll}</p>
        </div>;
      }
}
