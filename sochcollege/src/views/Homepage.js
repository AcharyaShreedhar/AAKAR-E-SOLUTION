import React, { Component } from "react";
import { Link } from "react-scroll";
import { Element } from "react-scroll";
import ScrollAnimation from "react-animate-on-scroll";
import {
  Dashboard,
  AboutUs,
  Programme,
  OurTeam,
  NewsAndEvents,
  Gallery,
  ContactUs,
  Footer
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
          <ScrollAnimation
            animateIn="zoomIn"
            duration={1}
            initiallyVisible={true}
          >
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
                  <Link
                    to="contact"
                    spy={true}
                    smooth={true}
                    hashSpy={true}
                    offset={-50}
                    duration={500}
                    delay={1000}
                    isDynamic={true}
                    onSetActive={this.handleSetActive}
                    onSetInactive={this.handleSetInactive}
                    ignoreCancelEvents={false}
                    className="p-2"
                    activeClass="active"
                  >
                    <a href="home" className="btn-get-started">
                      Get Started
                    </a>
                  </Link>
                </div>
              </section>
            </Element>
          </ScrollAnimation>
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
            <ScrollAnimation
              animateIn="pulse"
              duration={1}
              initiallyVisible={true}
            >
              <div className="sectioncard">
                <OurTeam />
              </div>
            </ScrollAnimation>
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
          <Element id="footer" name="footer">
            <div className="sectioncard  p-0">
              <Footer />
            </div>
          </Element>
        </React.Fragment>
      </div>
    );
  }
}
export default Homepage;
