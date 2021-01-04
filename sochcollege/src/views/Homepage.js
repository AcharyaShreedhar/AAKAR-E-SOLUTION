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
        <React.Fragment className="mt-5">
          <Element id="home" name="home" className="mt-5">
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
                  <br />
                  Leading Tomorrow
                </h1>
                <h2>We believe in hard work and excellence .</h2>
                <a href="home" className="btn-get-started">
                  Get Started
                </a>
              </div>
            </section>
          </Element>
          <Element id="about-us" name="about-us" className="mt-5">
            <div className="sectioncard">
              <AboutUs />
            </div>
          </Element>

          <Element id="programme" name="programme" className="mt-5">
            <div className="sectioncard">
              <Programme />
            </div>
          </Element>
          <Element id="our-team" name="our-team" className="mt-5">
            <div className="sectioncard">
              <OurTeam />
            </div>
          </Element>
          <Element id="news-events" name="news-events" className="mt-5">
            <div className="sectioncard">
              <NewsAndEvents />
            </div>
          </Element>
          <Element id="gallery" name="gallery" className="mt-5">
            <div className="sectioncard">
              <Gallery />
            </div>
          </Element>
          <Element id="contact-us" name="contact-us" className="mt-5">
            <div className="sectioncard">
              <ContactUs />
            </div>
          </Element>
        </React.Fragment>
      </div>
    );
  }
}
export default Homepage;
