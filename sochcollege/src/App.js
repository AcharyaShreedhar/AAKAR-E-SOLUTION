import Homepage from "./views/Homepage";
import { useState } from "react";
import Popup from "./Popup"
import "./App.css";
import {Modal, Button, Image} from 'react-bootstrap'
import "bootstrap/dist/css/bootstrap.min.css"
import React from "react";

function MyVerticallyCenteredModal(props) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      dialogClassName="modal-90w"
      centered
    >
      <Modal.Body>
        <Image
        src={"/images/soch_college.jpg"}
        // style={{ width: "5rem" }}
        alt="Soch College Admission"
        fluid
      />
      </Modal.Body>
    </Modal>
  );
}

{/* 
for Popup.js which is not in use  
function App() {
 // const [isOpen, setIsOpen] = useState(true);
  return (
    <div className="App">
      {/* {isOpen && <Popup
          handleClose = {()=>{setIsOpen(!isOpen)}}
        />}
      <Homepage />
    </div>
  );
} */}

function App() {
  const [show, setShow] = React.useState(true);

  return (
    <div className="App">

      <MyVerticallyCenteredModal
        show={show}
        onHide={() => setShow(false)}
      />

      <Homepage />
    </div>
  );
}

export default App;
