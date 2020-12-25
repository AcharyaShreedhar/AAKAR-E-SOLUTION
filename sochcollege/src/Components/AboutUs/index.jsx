import React, { Component } from "react";
import { Carousel, Card, Button } from "react-bootstrap";
import principal from "../../images/Principal.png";
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
        <div className="card d-flex flex-column pt-2">
          <h2>About Us</h2>
          <p>
            <strong>SOCH COLLEGE OF IT – </strong>affiliated with Tribhuvan
            University - is situated in the beautiful city of Pokhara,
            Ranipauwa, within easy reach of central Mahendrapool. Since its
            inception, SOCH has been delivering quality education in computing.
          </p>
        </div>
        <Carousel className="pt-2 border border-light rounded">
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
        <div className="d-flex flex-column">
          <div className="d-flex p-3 bg-secondary">
            <strong>Principal's Message</strong>
          </div>
          <div className="d-flex flex-row  pb-2">
            <Card className="w-50">
              <Card.Body>
                <blockquote className="blockquote mb-0 message">
                  <p>
                    As principal of this college, I am pleased to welcome
                    prospective student, current student, lecturer, visitor,
                    staff, guardian or parent. I encourage you to explore this
                    website to learn more about this college.
                  </p>
                  <p>
                    We deliver courses that ensure that our students are getting
                    the 21st century education they need. Active participation
                    in an education that challenges critical thinking, provides
                    career preparation, instills values, and inspires lifelong
                    learning is encouraged in our college.
                  </p>
                  <p>
                    The innovative community of lecturer and staff in our
                    college are dedicated and supportive because they see
                    students as an investment in the future.
                  </p>
                  <p>
                    College is about so much more than academic success and at
                    SOCH you will find much more. You will make friends for a
                    lifetime, establish networks that will ease your transition
                    into your working life and come to think of college as your
                    home at SOCH.
                  </p>
                  <p>
                    The future of this college is very bright, and I am honored
                    to be part of this extraordinary institution.
                  </p>
                  <footer className="blockquote-footer">
                    <strong className="text-dark">Sushil Adhikari</strong>
                    <br />
                    <cite title="Principal" className="text-dark">
                      <strong>Principal</strong>
                    </cite>
                    <br />
                    <cite title="Principal">M.Sc.Computer Science</cite>
                    <br />
                    <cite title="Principal">
                      (Technical University, Berlin, Germany)
                    </cite>
                  </footer>
                </blockquote>
              </Card.Body>
            </Card>
            <Card style={{ width: "18rem" }} className="w-50">
              <Card.Img variant="top" src={principal} />
            </Card>
          </div>
        </div>
      </div>
    );
  }
}
export default AboutUs;
