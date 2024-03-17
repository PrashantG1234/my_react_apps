import React, { Component } from "react";
import { v4 } from "uuid";
export default class Sca3 extends Component {
  constructor(props) {
    super(props);

    this.state = {
      courses: [
        { name: "Java", id: v4() },
        { name: "Python", id: v4() },
        { name: "C", id: v4() },
        { name: "C++", id: v4() },
      ],
    };
  }

  render() {
    console.log(v4());
    return (
      <div>
        <>
          <h1>Sharma Computer Academy</h1>
          <p>A premier IT institute</p>
          <p>Courses</p>
          {this.state.courses.map((course) => {
            return (
              <React.Fragment key={course.id}>
                <p>{course.name}</p>
              </React.Fragment>
            );
          })}
        </>
      </div>
    );
  }
}
