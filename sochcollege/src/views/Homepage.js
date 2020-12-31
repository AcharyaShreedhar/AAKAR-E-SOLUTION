import React, { Component } from "react";
import { Element } from "react-scroll";
import {
  Dashboard,
  AboutUs,
  Programme,
  OurTeam,
  NewsAndEvents,
  Gallery,
  ContactUs,
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
        <React.Fragment>
          <Element id="home" name="home">
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
                <a href="home" className="btn-get-started">
                  Get Started
                </a>
              </div>
            </section>
          </Element>

          <Element id="about-us" name="about-us">
            <div className=" card d-flex px-5 rounded">
              <AboutUs />
            </div>
          </Element>

          <Element id="programme" name="programme">
            <div className=" card d-flex px-5 rounded">
              <Programme />
            </div>
          </Element>
          <Element id="our-team" name="our-team">
            <div className=" card d-flex px-5 rounded">
              <OurTeam />
            </div>
          </Element>
          <Element id="news-events" name="news-events">
            <div className=" card d-flex px-5 rounded">
              <NewsAndEvents />
            </div>
          </Element>
          <Element id="gallery" name="gallery">
            <div className=" card d-flex px-5 rounded">
              <Gallery />
            </div>
          </Element>
          <Element id="contact-us" name="contact-us">
            <div className=" card d-flex px-5 rounded">
              <ContactUs />
            </div>
          </Element>
        </React.Fragment>
      </div>
    );
  }
}
export default Homepage;
