/**
 * Created by Shreedhar Acharya
 * 12/23/2020
 */
import React, { Component } from "react";
import { Link } from "react-scroll";
import { Image } from "react-bootstrap";
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
      <div className="header fixed-top ">
        <div className="container d-flex align-items-center">
          <h1 class="logo mr-auto">
            <a href="index.html">Soch College</a>
          </h1>
          {/* <h1 className="logo mr-auto">
            <Image
              
              style={{ width: "10rem" }}
              src={"/images/logo.png"}
              alt="Soch College"
            />
          </h1> */}

          <nav className="nav-menu d-none d-lg-block">
            <ul>
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
                className="p-2"
                activeClass="active"
              >
                <li>
                  <a href="home">Home</a>
                </li>
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
                className="p-2"
                activeClass="active"
              >
                <li>
                  <a href="about us">About Us</a>
                </li>
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
                className="p-2"
                activeClass="active"
              >
                <li>
                  <a href="programme">Programmes</a>
                </li>
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
                className="p-2"
                activeClass="active"
              >
                <li>
                  <a href="our team">Our Faculties</a>
                </li>
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
                className="p-2"
                activeClass="active"
              >
                <li>
                  <a href="news and events">News and Events</a>
                </li>
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
                className="p-2"
                activeClass="active"
              >
                <li>
                  <a href="gallery">Gallery</a>
                </li>
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
                className="p-2"
                activeClass="active"
              >
                <li>
                  <a href="contact">Contact Us</a>
                </li>
              </Link>
            </ul>
          </nav>
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
          <a className="get-started-btn">Get Started</a>
          </Link>
        </div>
      </div>
    );
  }
}
export default Dashboard;
