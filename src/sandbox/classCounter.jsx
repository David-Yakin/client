import React, { Component } from "react";

class ClassCounter extends Component {
  state = {
    count: 0,
    name: "",
  };

  componentDidMount() {
    console.log("hi");
  }

  componentDidUpdate() {
    console.log("update");
  }

  incrementCount = () => {
    let { count } = this.state;
    this.setState({ count: count + 1 });
  };

  render() {
    return (
      <div className="d-flex justify-content-center mt-4">
        <button className="btn btn-outline-dark" onClick={this.incrementCount}>
          Class Count: {this.state.count}
        </button>
      </div>
    );
  }
}

export default ClassCounter;
