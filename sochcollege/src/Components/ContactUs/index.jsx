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
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

class ContactUs extends Component {
  constructor(props) {
    super(props);
    this.state = {
      input: {},
      errors: {},
    };
  }

  handleSubmit(e) {
    e.preventDefault();
    if (this.validate(this.state.input)) {
      const { name, phoneNumber, email, message } = this.state.input;
      let templateParams = {
        from_name: name,
        from_phoneNumber: phoneNumber,
        from_email: email,
        to_name: "spacharya2537@gmail.com",
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
            toast.success(
              "Thanks for your feedback. Your feedback is successfully submitted. !",
              {
                position: "top-center",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
              }
            );
          },
          (error) => {
            toast.error(
              "Sorry ,Feedback submission failed.! Please try again",
              {
                position: "top-center",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
              }
            );
          }
        );
      this.resetForm();
    }
  }
  resetForm() {
    this.setState({
      input: {},
      error: {},
    });
  }
  handleChange = (param, e) => {
    let input = this.state.input;
    const newInput = {
      ...input,
      [param]: e.target.value,
    };
    this.setState({
      input: newInput,
    });
    this.validate(newInput);
  };

  validate(input) {
    let errors = {};
    let isValid = true;

    if (
      !input["name"] &&
      !input["email"] &&
      !input["phoneNumber"] &&
      !input["message"]
    ) {
      isValid = false;
      toast.error("Please fill all the required fields", {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    }
    if (!input["name"]) {
      isValid = false;
      errors["name"] = "Please enter your Name.";
    } else {
      errors["name"] = null;
    }

    if (!input["email"]) {
      isValid = false;
      errors["email"] = "Please enter your email Address.";
    } else {
      errors["email"] = null;
    }

    if (typeof input["email"] !== "undefined") {
      var pattern = new RegExp(
        /^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i
      );
      if (!pattern.test(input["email"])) {
        isValid = false;
        errors["email"] = "Please enter a valid email address.";
      } else {
        errors["email"] = null;
      }
    }

    if (!input["phoneNumber"]) {
      isValid = false;
      errors["phoneNumber"] = "Please enter your phone number.";
    } else {
      errors["phoneNumber"] = null;
    }

    if (typeof input["phoneNumber"] !== "undefined") {
      var pattern = new RegExp(/^[0-9\b]+$/);
      if (!pattern.test(input["phoneNumber"])) {
        isValid = false;
        errors["phoneNumber"] = "Please enter only number.";
      } else if (input["phoneNumber"].length != 10) {
        isValid = false;
        errors["phoneNumber"] = "Please enter valid phone number.";
      } else {
        errors["phoneNumber"] = null;
      }
    }
    if (!input["message"]) {
      isValid = false;
      errors["message"] = "Please enter your feedback Message.";
    } else {
      errors["message"] = null;
    }

    this.setState({
      errors: errors,
    });

    return isValid;
  }

  render() {
    return (
      <div>
        <ToastContainer
          position="top-center"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
        />
        <ToastContainer />
        <div className="d-flex card">
          <div className="d-flex p-3 bg-secondary">
            <strong>Contact</strong>
          </div>
        </div>
        <div className="d-flex card">
          <div className="d-flex p-2">
           <p className="text-left"> <strong>Location and Direction of Soch College</strong></p>
          </div>
          <Image className="rounded border" src={"/images/sochmap.png"} alt="" />
        </div>
        <div className="d-flex">
          <div className="w-50 card  p-5">
            <h1 className="d-flex pb-2">Feedback</h1>
            <Form onSubmit={this.handleSubmit.bind(this)}>
              <FormGroup controlId="formBasicName">
                <Label className="text-muted d-flex">Name</Label>
                <Input
                  type="text"
                  name="name"
                  value={this.state.input.name}
                  className="text-primary"
                  onChange={this.handleChange.bind(this, "name")}
                  placeholder="Name"
                />
                <div className="text-danger text-left">
                  {this.state.errors.name}
                </div>
              </FormGroup>
              <FormGroup controlId="formBasicName">
                <Label className="text-muted d-flex">Phone Number *</Label>
                <Input
                  type="text"
                  name="phoneNumber"
                  value={this.state.input.phoneNumber}
                  className="text-primary"
                  onChange={this.handleChange.bind(this, "phoneNumber")}
                  placeholder="Phone Number"
                />
                <div className="text-danger text-left">
                  {this.state.errors.phoneNumber}
                </div>
              </FormGroup>
              <FormGroup controlId="formBasicEmail">
                <Label className="text-muted d-flex">Email address *</Label>
                <Input
                  type="email"
                  name="email"
                  value={this.state.input.email}
                  className="text-primary"
                  onChange={this.handleChange.bind(this, "email")}
                  placeholder="Enter email"
                />
                <div className="text-danger text-left">
                  {this.state.errors.email}
                </div>
              </FormGroup>
              <FormGroup controlId="formBasicMessage">
                <Label className="text-muted d-flex">Feedback Message</Label>
                <Input
                  type="textarea"
                  name="message"
                  className="text-primary"
                  value={this.state.input.message}
                  onChange={this.handleChange.bind(this, "message")}
                />
                <div className="text-danger text-left">
                  {this.state.errors.message}
                </div>
              </FormGroup>
              <Button
                variant="primary"
                type="submit"
                className="btn btn-success"
              >
                Submit
              </Button>
            </Form>
          </div>
          <div className=" card w-50 p-5">
            <h1 className="d-flex pb-2">Contact Address</h1>
            <p className="text-left">
              <strong>Soch College Of IT</strong>
            </p>
            <p className="text-left">Ranipauwa -11 ,</p>
            <p className="text-left">Pokhara, NEPAL</p>
            <p className="text-left">(Behind Nepal Telecom Office)</p>

            <p className="text-left">Tel: +977-61540120/524096</p>
            <p className="text-left">E-mail: mail@sochcollege.edu.np</p>
          </div>
        </div>
      </div>
    );
  }
}
export default ContactUs;
