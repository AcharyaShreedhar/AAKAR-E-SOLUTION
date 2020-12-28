import React, { Component } from "react";
import { Image } from "react-bootstrap";

class Programme extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: null,
    };
  }

  render() {
    return (
      <div>
        <div className="d-flex card">
          <div className="d-flex p-3 bg-secondary">
            <strong>Programme</strong>
          </div>
          <p className="text-left color-light p-2">B.Sc.CSIT</p>
        </div>
        <div className="d-flex flex-row">
          <div className="d-flex card flex-row p-5">
            <Image
              className="w-50"
              style={{ width: "20rem" }}
              src={"/images/library1.jpg"}
              alt=""
            />
            <div className="d-flex w-50 flex-column text-left px-5">
              <h3>B.Sc. CSIT</h3>
              <h4 className="text-secondary">Overview</h4>
              <p className="font-italic">
                B.Sc.CSIT offered by Institute of Science and Technology,
                Tribhuvan University, Nepal is a four years – 8 semesters –
                academic program.
              </p>

              <p className="font-italic">
                This program ensures that graduates have a broad basic knowledge
                and creative skills to conceive, design, build and exploit
                Information Processing Systems. In addition to this, the program
                also stimulates development of soft skills such as team work,
                effective communication, technology management etc. These skills
                are acquired through the execution of various projects, lab
                works, presentations, case studies and seminars throughout the
                entire program.
              </p>

              <p className="font-italic">
                It is a challenging and demanding program. Nevertheless it is
                also rewarding and fun. Thus it is the right program for
                students who are passionate about Technology and Communication.
              </p>
            </div>
          </div>
        </div>
        <div className="d-flex card p-5">
          <div className="d-flex card pt-0">
            <Image
              className="rounded"
              src={"/images/courseobjectives.png"}
              alt=""
            />
          </div>
        </div>
      </div>
    );
  }
}
export default Programme;
