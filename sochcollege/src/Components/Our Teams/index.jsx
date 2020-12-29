import React, { Component } from "react";
import { Table } from "react-bootstrap";

class OurTeam extends Component {
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
            <strong>Our Team</strong>
          </div>
        </div>
        <div className="d-flex card text-left">
          <strong>Academics</strong>
        </div>
        <div className="d-flex card text-left">
          <strong>Administration</strong>
        </div>
      </div>
    );
  }
}
export default OurTeam;
