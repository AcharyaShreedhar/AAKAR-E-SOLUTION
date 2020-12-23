import React, { Component } from "react";
import Dashboard from "../Components";

class Homepage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: null,
    };
  }

  render() {
    return (
      <div id="header" class="fixed-top">
        <div class="container d-flex align-items-center">
          <Dashboard />
        </div>
      </div>
    );
  }
}
export default Homepage;
