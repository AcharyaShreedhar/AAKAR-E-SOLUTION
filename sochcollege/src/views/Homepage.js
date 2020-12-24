import React, { Component } from "react";
import Dashboard from "../Components";
import "./HomePage.css";

class Homepage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: null,
    };
  }

  render() {
    return (
      <body>
        <div className="header fixed-top">
          <Dashboard />

          <section
            id="hero"
            className="d-flex justify-content-center align-items-center"
          >
            <div
              className="container position-relative"
              data-aos="zoom-in"
              data-aos-delay="100"
            >
              <h1>
                Learning Today,
                <brb />
                Leading Tomorrow
              </h1>
              <h2>We are team of professionals in IT Industry.</h2>
              <a href="#" className="btn-get-started">
                Get Started
              </a>
            </div>
          </section>
        </div>
      </body>
    );
  }
}
export default Homepage;
