import React, { Component } from "react";
import {
  Dashboard,
  AboutUs,
  Programme,
  NewsAndEvents,
  Gallery,
} from "../Components";

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
      <div>
        <Dashboard />
        <section
          id="hero"
          className="hero d-flex justify-content-center align-items-center"
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
        <div className=" card d-flex px-5 rounded">
          <AboutUs />
        </div>
        <div className=" card d-flex px-5 rounded">
          <Programme />
        </div>
        <div className=" card d-flex px-5 rounded">
          <NewsAndEvents />
        </div>
        <div className=" card d-flex px-5 rounded">
          <Gallery />
        </div>
      </div>
    );
  }
}
export default Homepage;
