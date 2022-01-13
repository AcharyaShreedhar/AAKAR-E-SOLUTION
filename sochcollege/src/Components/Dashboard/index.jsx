/**
 * Created by Shreedhar Acharya
 * 12/23/2020
 */
import React, { Component } from "react";
import { Link } from "react-scroll";
import { Image, Navbar, Nav, Row, Col } from "react-bootstrap";
import "./Dashboard.css";

class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: null,
    };
  }

  render() {
    return (
      <div className="header fixed-top">
        <Navbar className="nav-menu" expand="lg">
          <Navbar.Brand href="#home">
            <Row>
              <Col>
                <Image
                  src={"/images/sochlogo.png"}
                  style={{ width: "5rem" }}
                  alt="Soch College"
                  fluid
                />
              </Col>
              <Col>
                <h5 className="title" align="center">
                  {" "}
                  SOCH COLLEGE
                </h5>
                <h5 className="title" align="center">
                  {" "}
                  OF IT
                </h5>
              </Col>
            </Row>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav>
              <Link
                to="home"
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
                activeClass="active"
              >
                <Nav.Link>
                  <a href="home">Home</a>
                </Nav.Link>
              </Link>
              <Link
                to="about-us"
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
                activeClass="active"
              >
                <Nav.Link>
                  <a href="about us">About Us</a>
                </Nav.Link>
              </Link>
              <Link
                to="programme"
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
                activeClass="active"
              >
                <Nav.Link>
                  <a href="programme">Programmes</a>
                </Nav.Link>
              </Link>
              <Link
                to="our-team"
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
                activeClass="active"
              >
                <Nav.Link>
                  <a href="our team">Our Faculties</a>
                </Nav.Link>
              </Link>
              <Link
                to="news-events"
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
                activeClass="active"
              >
                <Nav.Link>
                  <a href="news and events">News and Events</a>
                </Nav.Link>
              </Link>
              <Link
                to="gallery"
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
                activeClass="active"
              >
                <Nav.Link>
                  <a href="gallery">Gallery</a>
                </Nav.Link>
              </Link>
              <Link
                to="contact-us"
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
                activeClass="active"
              >
                <Nav.Link>
                  <a href="contact">Contact Us</a>
                </Nav.Link>
              </Link>
            </Nav>
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
              activeClass="active"
            >
              <a className="get-started-btn">Get Started</a>
            </Link>
          </Navbar.Collapse>
        </Navbar>
      </div>
    );
  }
}
export default Dashboard;
