import React, { Component } from "react";

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
        <div className="d-flex card">
          <div className="d-flex p-3 bg-secondary">
            <strong>Faculties</strong>
          </div>
        </div>
      </div>
    );
  }
}
export default OurTeam;
