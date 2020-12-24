import React, { Component } from "react";
import { Carousel } from "react-bootstrap";
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
      <div>
        <div className="card d-flex flex-column">
          <h2>About Us</h2>
          <p>
            <strong>SOCH COLLEGE OF IT – </strong>affiliated with Tribhuvan
            University - is situated in the beautiful city of Pokhara,
            Ranipauwa, within easy reach of central Mahendrapool. Since its
            inception, SOCH has been delivering quality education in computing.
          </p>
        </div>
        <Carousel className="bg-primary p-2">
          <Carousel.Item interval={1000}>
            <div className="slideritem">
              <h3>Our Mission</h3>
              <p>
                Provide easy access to qualitative and affordable education.
              </p>
              <p>Produce skillful human resources.</p>
              <p>
                Create conducive learning environment where creativity can
                flourish.
              </p>
            </div>
          </Carousel.Item>
          <Carousel.Item interval={500}>
            <div className="slideritem">
              <h3>Our Vision</h3>
              <p>
                Advance technical education through scholarship, leadership and
                practical exposure.
              </p>
              <p>Creation of job opportunities in society.</p>
            </div>
          </Carousel.Item>
          <Carousel.Item>
            <div className="slideritem">
              <h3>Our Objectives</h3>
              <p>Aim high.</p>
              <p>Be accountable for your action.</p>
              <p>Treat each other with dignity and respect.</p>
              <p>Ensure students can achieve their full potential.</p>
            </div>
          </Carousel.Item>
        </Carousel>
      </div>
    );
  }
}
export default AboutUs;
