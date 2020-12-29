import React, { Component } from "react";
import { Table } from "react-bootstrap";
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from "react-accessible-accordion";

class OurTeam extends Component {
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
            <strong>Our Team</strong>
          </div>
        </div>
        <div className="d-flex card text-left">
          <p className="p-2">
            <strong>Academics</strong>
          </p>
          <Table striped bordered hover responsive>
            <thead>
              <tr>
                <th>S.N</th>
                <th>Name</th>
                <th>Designation</th>
                <th>Subjects</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td>Sushil Adhikari</td>
                <td>Principal</td>
                <td>
                  Design and Analysis of Algorithm | Advanced Java Programming |
                  Fundamentals of Computer Programming | Theory of Computation
                </td>
              </tr>
              <tr>
                <td>2</td>
                <td>Paras Mani Bhandari </td>
                <td>Faculty</td>
                <td>
                  Introduction to Information Technology | Database Management
                  System
                </td>
              </tr>
              <tr>
                <td>3</td>
                <td>Raghu Nath Gyawali </td>
                <td>Faculty</td>
                <td>Software Engineering | E-Governance | Web Technologies</td>
              </tr>
              <tr>
                <td>4</td>
                <td>Shreedhar Acharya </td>
                <td>Faculty</td>
                <td>
                  Artificial Intelligence | Data Warehousing and Data Mining
                </td>
              </tr>
              <tr>
                <td>5</td>
                <td>Mekh Raj Poudel </td>
                <td>Faculty</td>
                <td>Introduction to Cognitive Science</td>
              </tr>
              <tr>
                <td>6</td>
                <td>Shiva Bahadur Karki </td>
                <td>Faculty</td>
                <td>Microprocessor | Computer Graphics</td>
              </tr>
              <tr>
                <td>7</td>
                <td>Laxmi Prasad Bastola </td>
                <td>Faculty</td>
                <td>
                  Introduction to Information Technology | Database Management
                  System
                </td>
              </tr>
              <tr>
                <td>8</td>
                <td>Kamana Poudel Adhikari </td>
                <td>Faculty</td>
                <td>Knowledge Management | Introduction to Management</td>
              </tr>
              <tr>
                <td>9</td>
                <td>Anil Thapa </td>
                <td>Faculty</td>
                <td>Operating Systems | System Analysis and Design</td>
              </tr>
              <tr>
                <td>10</td>
                <td>Subash Poudel </td>
                <td>Faculty</td>
                <td>
                  International Business Management | International Marketing
                </td>
              </tr>
              <tr>
                <td>11</td>
                <td>Madan Baral </td>
                <td>Faculty</td>
                <td>Technical Writing</td>
              </tr>
              <tr>
                <td>12</td>
                <td>Suresh Lamsal </td>
                <td>Faculty</td>
                <td>Digital Logic | Internet Technology</td>
              </tr>
              <tr>
                <td>13</td>
                <td>Nabin Poudel </td>
                <td>Faculty</td>
                <td>Simulation and Modeling</td>
              </tr>
              <tr>
                <td>14</td>
                <td>Puspa Bahadur Sunar </td>
                <td>Faculty</td>
                <td>Computer Network | Network Security</td>
              </tr>
              <tr>
                <td>15</td>
                <td>Rajan Nepal </td>
                <td>Faculty</td>
                <td>Linear Algebra | Discrete Structures</td>
              </tr>
            </tbody>
          </Table>
        </div>
        <div className="d-flex card text-left">
          <p className="p-2">
            <strong>Administration</strong>
          </p>
          <Table striped bordered hover responsive>
            <thead>
              <tr>
                <th>S.N</th>
                <th>Name</th>
                <th>Designation</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td>Bikash Pahari</td>
                <td>Director–Operation</td>
              </tr>
              <tr>
                <td>2</td>
                <td>Bharat Raj Adhikari</td>
                <td>Advisor</td>
              </tr>
              <tr>
                <td>3</td>
                <td>Saroj Adhikari</td>
                <td>Senior Administrator</td>
              </tr>
              <tr>
                <td>4</td>
                <td>Bimala Baral</td>
                <td>Administrator</td>
              </tr>
              <tr>
                <td>5</td>
                <td>Hem Bahadur Gurung</td>
                <td>System Administrator</td>
              </tr>
              <tr>
                <td>6</td>
                <td>Dipak Adhikari</td>
                <td>Accountant</td>
              </tr>
              <tr>
                <td>7</td>
                <td>Dev Sharma Dhungana</td>
                <td>Messenger</td>
              </tr>
              <tr>
                <td>8</td>
                <td>Bishnu Poudel</td>
                <td>Security Incharge</td>
              </tr>
              <tr>
                <td>9</td>
                <td>As Maya BK</td>
                <td>Housekeeping</td>
              </tr>
            </tbody>
          </Table>
        </div>
      </div>
    );
  }
}
export default OurTeam;
