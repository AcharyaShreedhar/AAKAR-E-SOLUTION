/**
 * Created by Shreedhar Acharya
 * 12/23/2020
 */
import React, { Component } from "react";
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
          <h1 className="logo mr-auto">
            <Image
              className="background"
              style={{ width: "10rem" }}
              src={"/images/logo.png"}
              alt="Soch College"
            />
          </h1>

          <nav className="nav-menu d-none d-lg-block">
            <ul>
              <li className="active">
                <a href="#">Home</a>
              </li>
              <li>
                <a href="#">About Us</a>
              </li>
              <li>
                <a href="#">Programmes</a>
              </li>
              <li>
                <a href="#">Our Faculties</a>
              </li>
              <li>
                <a href="#">News and Events</a>
              </li>
              <li>
                <a href="#">Gallery</a>
              </li>
              <li>
                <a href="#">Contact Us</a>
              </li>
            </ul>
          </nav>

          <a href="#" className="get-started-btn">
            Get Started
          </a>
        </div>
      </div>
    );
  }
}
export default Dashboard;
