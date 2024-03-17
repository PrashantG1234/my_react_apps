import React, { Component } from "react";

export default class Review extends Component {
  constructor(props) {
    super(props);

    this.state = {
      review: "",
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange(e) {
    this.setState({ review: [e.target.value] });
  }
  handleSubmit(e) {
    e.preventDefault();
    alert("A review was submitted: " + this.state.review);
    this.setState({ review: "" });
  }
  render() {
    return (
      <div style={{ textAlign: "center" }}>
        <form onSubmit={this.handleSubmit}>
          <h4>Review Us(Sca homepage)</h4>
          <textarea
            name="review"
            value={this.state.review}
            onChange={this.handleChange}
          ></textarea>
          <br />
          <button>submit</button>
        </form>
      </div>
    );
  }
}
