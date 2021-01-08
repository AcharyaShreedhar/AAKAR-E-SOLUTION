import React, { Component } from "react";
import { Card, Image, Table, Row, Col, Container } from "react-bootstrap";
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from "react-accessible-accordion";
import ScrollAnimation from "react-animate-on-scroll";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFileDownload } from "@fortawesome/free-solid-svg-icons";

class Programme extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: null,
    };
  }

  render() {
    return (
      <div className="w-100">
        <div className="card mt-1 pt-0">
          <div className="sectiontitle">
            <strong>Programme</strong>
          </div>
          <p className="text-left color-light p-2">B.Sc.CSIT</p>
        </div>
        <Row>
          <Col xs={12} sm={6} md={6}>
            <Card>
              <Card.Img
                variant="top"
                className="imageItem"
                src={"/images/library1.jpg"}
                fluid
              />
            </Card>
          </Col>
          <Col xs={12} sm={6} md={6}>
            <Card>
              <Card.Body>
                <h3>B.Sc. CSIT</h3>
                <h4 className="text-secondary">Overview</h4>
                <p className="font-italic">
                  B.Sc.CSIT offered by Institute of Science and Technology,
                  Tribhuvan University, Nepal is a four years – 8 semesters –
                  academic program.
                </p>

                <p className="font-italic">
                  This program ensures that graduates have a broad basic
                  knowledge and creative skills to conceive, design, build and
                  exploit Information Processing Systems. In addition to this,
                  the program also stimulates development of soft skills such as
                  team work, effective communication, technology management etc.
                  These skills are acquired through the execution of various
                  projects, lab works, presentations, case studies and seminars
                  throughout the entire program.
                </p>

                <p className="font-italic">
                  It is a challenging and demanding program. Nevertheless it is
                  also rewarding and fun. Thus it is the right program for
                  students who are passionate about Technology and
                  Communication.
                </p>
              </Card.Body>
            </Card>
          </Col>
        </Row>
        <div className="d-flex card my-2">
          <Container>
            <Row>
              <Col xs={4} sm={6} md={8} lg={12} className="py-2">
                <ScrollAnimation
                  animateIn="rollIn"
                  animateOnce="true"
                  duration={1}
                  initiallyVisible={true}
                >
                  <Image
                    className="rounded"
                    src={"/images/courseobjectives.png"}
                    alt=""
                    fluid
                  />
                </ScrollAnimation>
              </Col>
              <Col xs={4} sm={6} md={8} lg={12} className="py-2">
                <ScrollAnimation
                  animateIn="rollIn"
                  animateOnce="true"
                  duration={1}
                  initiallyVisible={true}
                >
                  <Image
                    className="rounded"
                    src={"/images/careeroptions.png"}
                    alt=""
                    fluid
                  />
                </ScrollAnimation>
              </Col>
              <Col xs={4} sm={6} md={8} lg={12} className="py-2">
                <ScrollAnimation
                  animateIn="rollIn"
                  animateOnce="true"
                  duration={1}
                  initiallyVisible={true}
                >
                  <Image
                    className="rounded"
                    src={"/images/eligibilitycriteria.png"}
                    alt=""
                    fluid
                  />
                </ScrollAnimation>
              </Col>
            </Row>
          </Container>
        </div>
        <ScrollAnimation animateIn="pulse" duration={1} initiallyVisible={true}>
          <div className="card pt-0 mt-1">
            <Accordion allowZeroExpanded>
              <AccordionItem>
                <AccordionItemHeading>
                  <AccordionItemButton>Syllabus</AccordionItemButton>
                </AccordionItemHeading>
                <div className="card p-0">
                  <AccordionItemPanel className="p-0">
                    <Accordion allowZeroExpanded className="w-100">
                      <AccordionItem>
                        <AccordionItemHeading>
                          <AccordionItemButton>
                            First Semester
                          </AccordionItemButton>
                        </AccordionItemHeading>
                        <AccordionItemPanel>
                          <Table striped bordered hover responsive>
                            <thead>
                              <tr>
                                <th>S.N</th>
                                <th>Subect Code</th>
                                <th>Subject</th>
                                <th>Download</th>
                              </tr>
                            </thead>
                            <tbody>
                              <tr>
                                <td>1</td>
                                <td>CSC 101</td>
                                <td>Introduction of IT</td>
                                <a
                                  href="/pdfs/Distributed Networking.pdf"
                                  download
                                >
                                  <td>
                                    <FontAwesomeIcon icon={faFileDownload} />
                                  </td>
                                </a>
                              </tr>
                              <tr>
                                <td>2</td>
                                <td>CSC 102</td>
                                <td>Programming in C</td>
                                <a
                                  href="/pdfs/Distributed Networking.pdf"
                                  download
                                >
                                  <td>
                                    <FontAwesomeIcon icon={faFileDownload} />
                                  </td>
                                </a>
                              </tr>
                              <tr>
                                <td>3</td>
                                <td>STA-103</td>
                                <td>Probability and Statistics</td>
                                <a
                                  href="/pdfs/Distributed Networking.pdf"
                                  download
                                >
                                  <td>
                                    <FontAwesomeIcon icon={faFileDownload} />
                                  </td>
                                </a>
                              </tr>
                              <tr>
                                <td>4</td>
                                <td>MTH 104</td>
                                <td>Calculus and Analytical Geometry</td>
                                <a
                                  href="/pdfs/Distributed Networking.pdf"
                                  download
                                >
                                  <td>
                                    <FontAwesomeIcon icon={faFileDownload} />
                                  </td>
                                </a>
                              </tr>
                              <tr>
                                <td>5</td>
                                <td>PHY-105</td>
                                <td>ELECTIVE : Physics I</td>
                                <a
                                  href="/pdfs/Distributed Networking.pdf"
                                  download
                                >
                                  <td>
                                    <FontAwesomeIcon icon={faFileDownload} />
                                  </td>
                                </a>
                              </tr>
                              <tr>
                                <td>6</td>
                                <td>BIO-106</td>
                                <td>ELECTIVE : Biology I</td>
                                <a
                                  href="/pdfs/Distributed Networking.pdf"
                                  download
                                >
                                  <td>
                                    <FontAwesomeIcon icon={faFileDownload} />
                                  </td>
                                </a>
                              </tr>
                              <tr>
                                <td>7</td>
                                <td>GEO 107</td>
                                <td>ELECTIVE : Geology I</td>
                                <a
                                  href="/pdfs/Distributed Networking.pdf"
                                  download
                                >
                                  <td>
                                    <FontAwesomeIcon icon={faFileDownload} />
                                  </td>
                                </a>
                              </tr>
                              <tr>
                                <td>8</td>
                                <td>STA 108</td>
                                <td>ELECTIVE : Statistics I</td>
                                <a
                                  href="/pdfs/Distributed Networking.pdf"
                                  download
                                >
                                  <td>
                                    <FontAwesomeIcon icon={faFileDownload} />
                                  </td>
                                </a>
                              </tr>
                            </tbody>
                          </Table>
                        </AccordionItemPanel>
                      </AccordionItem>
                      <AccordionItem>
                        <AccordionItemHeading>
                          <AccordionItemButton>
                            Second Semester
                          </AccordionItemButton>
                        </AccordionItemHeading>
                        <div className="d-flex">
                          <AccordionItemPanel>
                            <p>Uploaded soon. Sorry for the inconvienience</p>
                          </AccordionItemPanel>
                        </div>
                      </AccordionItem>
                      <AccordionItem>
                        <AccordionItemHeading>
                          <AccordionItemButton>
                            Third Semester
                          </AccordionItemButton>
                        </AccordionItemHeading>
                        <div className="d-flex">
                          <AccordionItemPanel>
                            <p>Uploaded soon. Sorry for the inconvienience</p>
                          </AccordionItemPanel>
                        </div>
                      </AccordionItem>
                      <AccordionItem>
                        <AccordionItemHeading>
                          <AccordionItemButton>
                            Fourth Semester
                          </AccordionItemButton>
                        </AccordionItemHeading>
                        <div className="d-flex">
                          <AccordionItemPanel>
                            <p>Uploaded soon. Sorry for the inconvienience</p>
                          </AccordionItemPanel>
                        </div>
                      </AccordionItem>
                      <AccordionItem>
                        <AccordionItemHeading>
                          <AccordionItemButton>
                            Fifth Semester
                          </AccordionItemButton>
                        </AccordionItemHeading>
                        <div className="d-flex">
                          <AccordionItemPanel>
                            <p>Uploaded soon. Sorry for the inconvienience</p>
                          </AccordionItemPanel>
                        </div>
                      </AccordionItem>
                      <AccordionItem>
                        <AccordionItemHeading>
                          <AccordionItemButton>
                            Sixth Semester
                          </AccordionItemButton>
                        </AccordionItemHeading>
                        <div className="d-flex">
                          <AccordionItemPanel>
                            <p>Uploaded soon. Sorry for the inconvienience</p>
                          </AccordionItemPanel>
                        </div>
                      </AccordionItem>
                      <AccordionItem>
                        <AccordionItemHeading>
                          <AccordionItemButton>
                            Seventh Semester
                          </AccordionItemButton>
                        </AccordionItemHeading>
                        <div className="d-flex">
                          <AccordionItemPanel>
                            <p>Uploaded soon. Sorry for the inconvienience</p>
                          </AccordionItemPanel>
                        </div>
                      </AccordionItem>
                      <AccordionItem>
                        <AccordionItemHeading>
                          <AccordionItemButton>
                            Eighth Semester
                          </AccordionItemButton>
                        </AccordionItemHeading>
                        <div className="d-flex">
                          <AccordionItemPanel>
                            <p>Uploaded soon. Sorry for the inconvienience</p>
                          </AccordionItemPanel>
                        </div>
                      </AccordionItem>
                    </Accordion>
                  </AccordionItemPanel>
                </div>
              </AccordionItem>
            </Accordion>
          </div>
        </ScrollAnimation>
      </div>
    );
  }
}
export default Programme;
