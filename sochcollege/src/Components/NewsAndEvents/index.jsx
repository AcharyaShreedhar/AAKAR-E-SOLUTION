import React, { Component } from "react";
import { Image } from "react-bootstrap";

class NewsAndEvents extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: null,
    };
  }

  render() {
    return (
      <div>
        <div className="d-flex card pt-0">
          <div className="sectiontitle">
            <strong>News And Events</strong>
          </div>
          <p className="text-left color-light p-2">Guest Lecturers</p>
        </div>

        <div className="d-flex flex-column mt-1">
          <div className="d-flex card flex-row p-5 align-items-center">
            <div className="w-50 mr-1 border-right">
              <Image
                className="p-1 rounded"
                style={{ width: "16rem", height: "16rem" }}
                src={"/images/gyanwali-1.jpg"}
                alt=""
              />
              <Image
                className="p-1 rounded"
                style={{ width: "16rem", height: "16rem" }}
                src={"/images/gyanwali-2.jpg"}
                alt=""
              />
            </div>
            <div className="w-50 d-flex flex-column text-left px-5">
              <h3>Milan Gyawali</h3>
              <p className="font-italic">
                A Professional Trainer who is Pursuing his PHD in University of
                Leicester UK has Conducted a Workshop for Faculties of Soch
                College of IT Under the topic Learning and Teaching:
                Transforming Tacit Knowledge.
              </p>
            </div>
          </div>
          <div className="d-flex card flex-row p-5 align-items-center">
            <div className="w-50 d-flex flex-column text-left px-5">
              <h3>Vabuk Pahari</h3>
              <p className="font-italic">
                Recipient of Davis Scholarship and currently studying Computer
                Science at Wesleyan University, Connecticut, USA shares his
                experience about studying in America, the application process
                and finding the right college in the US for our students at
                Soch.
              </p>
            </div>
            <div className="w-50 d-flex flex-row pl-5 border-left">
              <Image
                className="p-1 rounded"
                src={"/images/vabuk-1.jpg"}
                alt=""
              />
              <Image
                className="p-1 rounded"
                src={"/images/vabuk-2.jpg"}
                alt=""
              />
            </div>
          </div>
          <div className="d-flex card flex-row p-5 align-items-center">
            <div className="w-50 mr-1 border-right">
              <Image
                className="p-1 rounded"
                style={{ width: "16rem", height: "16rem" }}
                src={"/images/lect1.jpg"}
                alt=""
              />
              <Image
                className="p-1 rounded"
                style={{ width: "16rem", height: "16rem" }}
                src={"/images/lect2.jpg"}
                alt=""
              />
            </div>
            <div className="w-50 d-flex flex-column text-left px-5">
              <h3>Prof. Dr Albert Aukes</h3>
              <p className="font-italic">
                Former chief innovation officer of Deutsche Telekom AG and
                Chairman of the supervisory board of the German Research Center
                for Artificial Intelligence (GMBH) has an interaction with
                students about the recent trends in technology.
              </p>
            </div>
          </div>
          <div className="d-flex card flex-row p-5 align-items-center">
            <div className="w-50 d-flex flex-column text-left px-5">
              <h3>Tristan Michael</h3>
              <p className="font-italic">
                A programmer from Disney USA shows students how to develop video
                games applications.
              </p>
            </div>
            <div className="w-50 d-flex flex-row pl-5 border-left">
              <Image className="p-1 rounded" src={"/images/lect3.jpg"} alt="" />
              <Image className="p-1 rounded" src={"/images/lect4.jpg"} alt="" />
            </div>
          </div>
          <div className="d-flex card flex-row p-5 align-items-center">
            <div className="w-50 d-flex flex-row mr-5 border-right">
              <Image
                className="p-1 rounded"
                style={{ width: "16rem", height: "16rem" }}
                src={"/images/lect5.jpg"}
                alt=""
              />
              <Image
                className="p-1 rounded"
                style={{ width: "16rem", height: "16rem" }}
                src={"/images/lect6.jpg"}
                alt=""
              />
            </div>
            <div className="w-50 d-flex flex-column text-left px-5">
              <h3>Vaskar Pahari</h3>
              <p className="font-italic">
                A graduate student from Yale university and currently working as
                Financial analyst at Brace Bridge Capital, Boston USA, has an
                interaction with students about the significance of Algorithm in
                Financial sector.
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default NewsAndEvents;
