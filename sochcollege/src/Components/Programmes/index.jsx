import React, { Component } from "react";

class Programme extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: null,
    };
  }

  render() {
    return (
      <div>
        <div className="d-flex card">
          <div className="d-flex p-3 bg-secondary">
            <strong>Programme</strong>
          </div>
          <p className="text-left color-light p-2">B.Sc.CSIT</p>
        </div>
      </div>
    );
  }
}
export default Programme;
