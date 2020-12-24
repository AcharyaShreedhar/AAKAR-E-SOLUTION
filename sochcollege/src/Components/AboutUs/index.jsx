import React, { Component } from "react";
import "./AboutUs.scss";

class AboutUs extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: null,
    };
  }

  render() {
    return (
      <div className="d-flex flex-column">
        <div className="card pt-2">
          <div>
            <h2>About Us</h2>
            <p>
            <strong>SOCH COLLEGE OF IT – </strong>affiliated with Tribhuvan University - is situated in the beautiful city of Pokhara, Ranipauwa, within easy reach of central Mahendrapool. Since its inception, SOCH has been delivering quality education in computing.
            </p>
          </div>
        </div>
      </div>
    );
  }
}
export default AboutUs;
