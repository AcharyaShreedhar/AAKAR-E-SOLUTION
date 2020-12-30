import React, { Component } from "react";
import { Image } from "react-bootstrap";
import * as emailjs from "emailjs-com";
import {
  Button,
  FormFeedback,
  Form,
  FormGroup,
  Label,
  Input,
} from "reactstrap";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

class ContactUs extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: null,
      name: "",
      phoneNumber: "",
      email: "",
      subject: "",
      message: "",
    };
  }
  handleSubmit(e) {
    e.preventDefault();
    const { name, phoneNumber, email, subject, message } = this.state;
    let templateParams = {
      from_name: name,
      from_phoneNumber: phoneNumber,
      from_email: email,
      to_name: "spacharya2537@gmail.com",
      subject: subject,
      message: message,
    };

    emailjs
      .send(
        "service_a701tti",
        "template_kiafs64",
        templateParams,
        "user_71grJDF4CU0kQQdZsnnxM"
      )
      .then(
        (response) => {
          console.log("SUCCESS!", response.status, response.text);
        },
        (err) => {
          console.log("FAILED...", err);
        }
      );

    this.resetForm();
  }
  resetForm() {
    this.setState({
      name: "",
      phoneNumber: "",
      email: "",
      subject: "",
      message: "",
    });
  }
  handleChange = (param, e) => {
    this.setState({ [param]: e.target.value });
  };

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
        <div>
          <h1 className="p-heading1">Feedback</h1>
          <Form onSubmit={this.handleSubmit.bind(this)}>
            <FormGroup controlId="formBasicName">
              <Label className="text-muted">Name</Label>
              <Input
                type="text"
                name="name"
                value={this.state.name}
                className="text-primary"
                onChange={this.handleChange.bind(this, "name")}
                placeholder="Name"
              />
            </FormGroup>
            <FormGroup controlId="formBasicName">
              <Label className="text-muted">Phone Number</Label>
              <Input
                type="text"
                name="phoneNumber"
                value={this.state.phoneNumber}
                className="text-primary"
                onChange={this.handleChange.bind(this, "phoneNumber")}
                placeholder="Phone Number"
              />
            </FormGroup>
            <FormGroup controlId="formBasicEmail">
              <Label className="text-muted">Email address</Label>
              <Input
                type="email"
                name="email"
                value={this.state.email}
                className="text-primary"
                onChange={this.handleChange.bind(this, "email")}
                placeholder="Enter email"
              />
            </FormGroup>

            <FormGroup controlId="formBasicSubject">
              <Label className="text-muted">Subject</Label>
              <Input
                type="text"
                name="subject"
                className="text-primary"
                value={this.state.subject}
                onChange={this.handleChange.bind(this, "subject")}
                placeholder="Subject"
              />
            </FormGroup>
            <FormGroup controlId="formBasicMessage">
              <Label className="text-muted">Feedback Message</Label>
              <Input
                type="textarea"
                name="message"
                className="text-primary"
                value={this.state.message}
                onChange={this.handleChange.bind(this, "message")}
              />
            </FormGroup>
            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Form>
        </div>
      </div>
    );
  }
}
export default ContactUs;
