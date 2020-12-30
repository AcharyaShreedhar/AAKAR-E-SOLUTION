import React, { Component } from "react";
import { Image } from "react-bootstrap";

class ContactUs extends Component {
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
            <strong>Contact</strong>
          </div>
        </div>
        <div className="d-flex card">
        <div className="d-flex p-2">
            <strong>Location and Direction of Soch College</strong>
          </div>
          <Image className="rounded" src={"/images/sochmap.png"} alt="" />
        </div>
        
      </div>
    );
  }
}
export default ContactUs;
