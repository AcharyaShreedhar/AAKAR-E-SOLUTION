import React, { Component } from "react";
import { Row, Col, Image, Container } from "react-bootstrap";
import ScrollAnimation from "react-animate-on-scroll";

class Gallery extends Component {
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
            <strong>Gallery</strong>
          </div>
        </div>
        <div className="d-flex card my-1">
          <Container>
            <Row>
              <Col xs={6} md={4} className="py-2">
                <ScrollAnimation
                  animateIn="zoomIn"
                  animateOnce={true}
                  duration={1}
                  initiallyVisible={true}
                >
                  <Image
                    className="rounded"
                    src={"/images/sochcollege.JPG"}
                    alt=""
                    fluid
                  />
                </ScrollAnimation>
              </Col>

              <Col xs={6} md={4} className="py-2">
                <ScrollAnimation
                  animateIn="zoomIn"
                  duration={1}
                  initiallyVisible={true}
                >
                  <Image
                    className="rounded"
                    src={"/images/sports1.png"}
                    alt=""
                    fluid
                  />
                </ScrollAnimation>
              </Col>

              <Col xs={6} md={4} className="py-2">
                <ScrollAnimation
                  animateIn="zoomIn"
                  animateOnce
                  duration={1}
                  initiallyVisible={true}
                >
                  <Image
                    className="rounded"
                    src={"/images/computerlab1.jpg"}
                    alt=""
                    fluid
                  />
                </ScrollAnimation>
              </Col>
              <Col xs={6} md={4} className="py-2">
                <ScrollAnimation
                  animateIn="zoomIn"
                  duration={1}
                  initiallyVisible={true}
                >
                  <Image
                    className="rounded"
                    src={"/images/computerlab2.jpg"}
                    alt=""
                    fluid
                  />
                </ScrollAnimation>
              </Col>
              <Col xs={6} md={4} className="py-2">
                <ScrollAnimation
                  animateIn="zoomIn"
                  duration={1}
                  initiallyVisible={true}
                >
                  <Image
                    className="rounded"
                    src={"/images/computerlab3.jpg"}
                    alt=""
                    fluid
                  />
                </ScrollAnimation>
              </Col>
              <Col xs={6} md={4} className="py-2">
                <ScrollAnimation
                  animateIn="zoomIn"
                  duration={1}
                  initiallyVisible={true}
                >
                  <Image
                    className="rounded"
                    src={"/images/computerlab4.jpg"}
                    alt=""
                    fluid
                  />
                </ScrollAnimation>
              </Col>
              <Col xs={6} md={4} className="py-2">
                <ScrollAnimation
                  animateIn="zoomIn"
                  duration={1}
                  initiallyVisible={true}
                >
                  <Image
                    className="rounded"
                    src={"/images/digitallab1.jpg"}
                    alt=""
                    fluid
                  />
                </ScrollAnimation>
              </Col>
              <Col xs={6} md={4} className="py-2">
                <ScrollAnimation
                  animateIn="zoomIn"
                  duration={1}
                  initiallyVisible={true}
                >
                  <Image
                    className="rounded"
                    src={"/images/library1.jpg"}
                    alt=""
                    fluid
                  />
                </ScrollAnimation>
              </Col>
              <Col xs={6} md={4} className="py-2">
                <ScrollAnimation
                  animateIn="zoomIn"
                  duration={1}
                  initiallyVisible={true}
                >
                  <Image
                    className="rounded"
                    src={"/images/library2.jpg"}
                    alt=""
                    fluid
                  />
                </ScrollAnimation>
              </Col>
              <Col xs={6} md={4} className="py-2">
                <ScrollAnimation
                  animateIn="zoomIn"
                  duration={1}
                  initiallyVisible={true}
                >
                  <Image
                    className="rounded"
                    src={"/images/library3.jpg"}
                    alt=""
                    fluid
                  />
                </ScrollAnimation>
              </Col>
              <Col xs={6} md={4} className="py-2">
                <ScrollAnimation
                  animateIn="zoomIn"
                  duration={1}
                  initiallyVisible={true}
                >
                  <Image
                    className="rounded"
                    src={"/images/library4.jpg"}
                    alt=""
                    fluid
                  />
                </ScrollAnimation>
              </Col>
              <Col xs={6} md={4} className="py-2">
                <ScrollAnimation
                  animateIn="zoomIn"
                  duration={1}
                  initiallyVisible={true}
                >
                  <Image
                    className="rounded"
                    src={"/images/canteen1.jpg"}
                    alt=""
                    fluid
                  />
                </ScrollAnimation>
              </Col>
              <Col xs={6} md={4} className="py-2">
                <ScrollAnimation
                  animateIn="zoomIn"
                  duration={1}
                  initiallyVisible={true}
                >
                  <Image
                    className="rounded"
                    src={"/images/canteen3.jpg"}
                    alt=""
                    fluid
                  />
                </ScrollAnimation>
              </Col>
              <Col xs={6} md={4} className="py-2">
                <ScrollAnimation
                  animateIn="zoomIn"
                  duration={1}
                  initiallyVisible={true}
                >
                  <Image
                    className="rounded"
                    src={"/images/canteen4.jpg"}
                    alt=""
                    fluid
                  />
                </ScrollAnimation>
              </Col>
              <Col xs={6} md={4} className="py-2">
                <ScrollAnimation
                  animateIn="zoomIn"
                  duration={1}
                  initiallyVisible={true}
                >
                  <Image
                    className="rounded"
                    src={"/images/canteen5.png"}
                    alt=""
                    fluid
                  />
                </ScrollAnimation>
              </Col>
            </Row>
          </Container>
        </div>
      </div>
    );
  }
}
export default Gallery;
