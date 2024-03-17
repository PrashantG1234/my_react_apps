import React, { Component } from "react";

export default class Sca2 extends Component {
  constructor(props) {
    super(props);

    this.state = {
      courses: ["Java", "Python", "C", "C++"],
    };
  }

  render() {
    return (
      <div>
        <>
          <h1>Sharma Computer Academy</h1>
          <p>A premier IT institute</p>
          <p>Courses</p>
          {this.state.courses.map((courseName, index) => {
            return (
              // we can only pass key as attribute but only from React.Fragment
              <React.Fragment key={index}>
                <p>{courseName}</p>
              </React.Fragment>
            );
          })}
        </>
      </div>
    );
  }
}
