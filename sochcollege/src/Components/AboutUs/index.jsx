import React, { Component } from "react";
import { Carousel, Card, Button } from "react-bootstrap";
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from "react-accessible-accordion";
import CountUp from "react-countup";
import principal from "../../images/Principal.png";
import "react-accessible-accordion/dist/fancy-example.css";
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
                <blockquote className="blockquote mb-0 message p-5">
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
        <div className="d-flex counts">
          <div class="container">
            <div class="row counters">
              <div class="col-lg-3 col-6 text-center">
                <CountUp end={1232} />
                <p>Students</p>
              </div>
              <div class="col-lg-3 col-6 text-center">
                <CountUp end={7} />
                <p>Courses</p>
              </div>
              <div class="col-lg-3 col-6 text-center">
                <CountUp end={55} />
                <p>Events</p>
              </div>
              <div class="col-lg-3 col-6 text-center">
                <CountUp end={40} />
                <p>Trainers</p>
              </div>
            </div>
          </div>
        </div>
        <div className="d-flex card">
          <div className="d-flex p-3 bg-secondary">
            <strong>College's Infrastructure</strong>
          </div>
          <p className="text-left p-2">
            The college has its own property spread over 2 ropanies of land and
            newly constructed building (Area 15000 Square Feet) with modern
            amenities with an added attraction of peaceful environment and
            greenery.
          </p>
          <div className="infrastructure backImg">
            <Accordion allowZeroExpanded className="w-100">
              <AccordionItem>
                <AccordionItemHeading>
                  <AccordionItemButton>Computer Lab</AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                  <p>
                    The computer lab at SOCH has 48 PCs, one internet/file
                    server and other switching/networking devices. Each PC is
                    configured with software and tools required for various
                    practical sessions. For a smooth and fast internet
                    connectivity, we have a dedicated optical fiber link.
                  </p>
                </AccordionItemPanel>
              </AccordionItem>
              <AccordionItem>
                <AccordionItemHeading>
                  <AccordionItemButton>Digital Lab</AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                  <p>
                    The digital lab at SOCH has sufficient sets of Digital logic
                    trainer kit and DYNA-85 Microprocessor kit each.
                  </p>
                </AccordionItemPanel>
              </AccordionItem>
              <AccordionItem>
                <AccordionItemHeading>
                  <AccordionItemButton>Library</AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                  <p>
                    The college has an extensive library containing more than
                    1000 volumes of various subject books, encyclopedias,
                    biographies, dictionaries and old projects. Furthermore our
                    library contains subscribed newspapers, magazines - both
                    national and international - and journals.
                  </p>
                </AccordionItemPanel>
              </AccordionItem>
              <AccordionItem>
                <AccordionItemHeading>
                  <AccordionItemButton>Sports</AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                  <p>
                    Students at SOCH have access to outdoor sports like table
                    tennis, cricket and five-a-side football pitch located
                    inside the college premises. Moreover students can play
                    indoor games like chess in their leisure.
                  </p>
                </AccordionItemPanel>
              </AccordionItem>
              <AccordionItem>
                <AccordionItemHeading>
                  <AccordionItemButton>Canteen</AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                  <p>
                    The canteen situated at the top of the college building with
                    panoramic view of Annapurna range provides freshly prepared
                    snacks and meals in affordable price range for students.
                  </p>
                </AccordionItemPanel>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </div>
    );
  }
}
export default AboutUs;
