import React, { Component } from "react";
import { Image, Row, Col, Container } from "react-bootstrap";
import "./NewsAndEvents.scss";

class NewsAndEvents extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: null,
    };
  }

  render() {
    return (
      <div className="w-100">
        <div className="card pt-0">
          <div className="sectiontitle">
            <strong>News And Events</strong>
          </div>
          <p className="text-left color-light p-2">Guest Lecturers</p>
        </div>
        <Row className="item">
          <Col xs={12} sm={6} md={4}>
            <Image
              className="imageItem img-thumbnail"
              src={"/images/gyanwali-1.jpg"}
              alt=""
              fluid
            />
          </Col>
          <Col xs={12} sm={6} md={4}>
            <Image
              className="imageItem img-thumbnail"
              src={"/images/gyanwali-2.jpg"}
              alt=""
              fluid
            />
          </Col>
          <Col xs={12} sm={6} md={4}>
            <h3>Milan Gyawali</h3>
            <p className="font-italic">
              A Professional Trainer who is Pursuing his PHD in University of
              Leicester UK has Conducted a Workshop for Faculties of Soch
              College of IT Under the topic Learning and Teaching: Transforming
              Tacit Knowledge.
            </p>
          </Col>
        </Row>
        <Row className="item">
          <Col xs={12} sm={6} md={4}>
            <h3>Vabuk Pahari</h3>
            <p className="font-italic">
              Recipient of Davis Scholarship and currently studying Computer
              Science at Wesleyan University, Connecticut, USA shares his
              experience about studying in America, the application process and
              finding the right college in the US for our students at Soch.
            </p>
          </Col>
          <Col xs={12} sm={6} md={4}>
            <Image
              className="imageItem img-thumbnail"
              src={"/images/vabuk-1.jpg"}
              alt=""
              fluid
            />
          </Col>
          <Col xs={12} sm={6} md={4}>
            <Image
              className="imageItem img-thumbnail"
              src={"/images/vabuk-2.jpg"}
              alt=""
              fluid
            />
          </Col>
        </Row>
        <Row className="item">
          <Col xs={12} sm={6} md={4}>
            <Image
              className="imageItem img-thumbnail"
              src={"/images/lect1.jpg"}
              alt=""
              fluid
            />
          </Col>
          <Col xs={12} sm={6} md={4}>
            <Image
              className="imageItem img-thumbnail"
              src={"/images/lect2.jpg"}
              alt=""
              fluid
            />
          </Col>
          <Col xs={12} sm={6} md={4}>
            <h3>Prof. Dr Albert Aukes</h3>
            <p className="font-italic">
              Former chief innovation officer of Deutsche Telekom AG and
              Chairman of the supervisory board of the German Research Center
              for Artificial Intelligence (GMBH) has an interaction with
              students about the recent trends in technology.
            </p>
          </Col>
        </Row>
        <Row className="item">
          <Col xs={12} sm={6} md={4}>
            <h3>Tristan Michael</h3>
            <p className="font-italic">
              A programmer from Disney USA shows students how to develop video
              games applications.
            </p>
          </Col>
          <Col xs={12} sm={6} md={4}>
            <Image
              className="imageItem img-thumbnail"
              src={"/images/lect3.jpg"}
              alt=""
              fluid
            />
          </Col>
          <Col xs={12} sm={6} md={4}>
            <Image
              className="imageItem img-thumbnail"
              src={"/images/lect4.jpg"}
              alt=""
              fluid
            />
          </Col>
        </Row>
        <Row className="item">
          <Col xs={12} sm={6} md={4}>
            <Image
              className="imageItem img-thumbnail"
              src={"/images/lect5.jpg"}
              alt=""
              fluid
            />
          </Col>
          <Col xs={12} sm={6} md={4}>
            <Image
              className="imageItem img-thumbnail"
              src={"/images/lect6.jpg"}
              alt=""
              fluid
            />
          </Col>
          <Col xs={12} sm={6} md={4}>
            <h3>Vaskar Pahari</h3>
            <p className="font-italic">
              A graduate student from Yale university and currently working as
              Financial analyst at Brace Bridge Capital, Boston USA, has an
              interaction with students about the significance of Algorithm in
              Financial sector.
            </p>
          </Col>
        </Row>
      </div>
    );
  }
}
export default NewsAndEvents;
