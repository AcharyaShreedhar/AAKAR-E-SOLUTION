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
      <div className="w-100">
        <div className="card pt-0">
          <div className="sectiontitle">
            <strong>Our Team</strong>
          </div>
        </div>
        <div className="card pt-0 w-100">
          <Accordion allowZeroExpanded>
            <AccordionItem>
              <AccordionItemHeading>
                <AccordionItemButton>Management</AccordionItemButton>
              </AccordionItemHeading>
              <AccordionItemPanel>
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
                      <td>Founder</td>
                    </tr>
                    <tr>
                      <td>2</td>
                      <td>Sushil Adhikari</td>
                      <td>Principal</td>
                    </tr>
                  </tbody>
                </Table>
              </AccordionItemPanel>
            </AccordionItem>
            <AccordionItem>
              <AccordionItemHeading>
                <AccordionItemButton>Faculties</AccordionItemButton>
              </AccordionItemHeading>
              <AccordionItemPanel>
                <Table striped bordered hover responsive>
                  <thead>
                    <tr>
                      <th>S.N</th>
                      <th>Name</th>
                      <th>Qualification</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>1</td>
                      <td>Sushil Adhikari</td>
                      <td>MSc Computer Science</td>
                    </tr>
                    <tr>
                      <td>2</td>
                      <td>Raghu Nath Gyawali </td>
                      <td>MSc IT</td>
                    </tr>
                    <tr>
                      <td>3</td>
                      <td>Shreedhar Acharya </td>
                      <td>Bachelor in Computer Engineering</td>
                    </tr>
                    <tr>
                      <td>4</td>
                      <td>Shiva Bahadur Karki </td>
                      <td>MSc in Statistics</td>
                    </tr>
                    <tr>
                      <td>5</td>
                      <td>Anil Thapa</td>
                      <td>MSc IT</td>
                    </tr>
                    <tr>
                      <td>6</td>
                      <td>Sandip Adhikari </td>
                      <td>Bachelor in Computer Science and Engineering</td>
                    </tr>
                    <tr>
                      <td>7</td>
                      <td>BalaKrishna Neupane</td>
                      <td>MSc Computer Science</td>
                    </tr>
                    <tr>
                      <td>8</td>
                      <td>Hari Kc </td>
                      <td>MSc in Communication and Knowledge Engineering</td>
                    </tr>
                    <tr>
                      <td>9</td>
                      <td>Laxmi Prasad Bastola </td>
                      <td>MSc in Communication and Knowledge Engineering</td>
                    </tr>
                    <tr>
                      <td>10</td>
                      <td>Sachin Subedi </td>
                      <td>MBA</td>
                    </tr>
                    <tr>
                      <td>11</td>
                      <td>Yuvaraj Sharma Dhakal </td>
                      <td>MSc in Computing and System Security Management </td>
                    </tr>
                    <tr>
                      <td>12</td>
                      <td>Ashish KC </td>
                      <td>BE Electronics and Communication</td>
                    </tr>
                    <tr>
                      <td>13</td>
                      <td>Nishal Gurung </td>
                      <td>Bachelor in Software Engineering</td>
                    </tr>
                    <tr>
                      <td>14</td>
                      <td>Smita Ghimire</td>
                      <td>
                        Bachelor in Electronics and Communication ENgineering
                      </td>
                    </tr>
                  </tbody>
                </Table>
              </AccordionItemPanel>
            </AccordionItem>
          </Accordion>
        </div>
      </div>
    );
  }
}
export default OurTeam;
