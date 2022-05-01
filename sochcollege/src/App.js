import Homepage from './views/Homepage'
import { useState } from 'react'
import Popup from './Popup'
import './App.css'
import { Modal, Button, Image } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import React from 'react'

function WorkshopModal(props) {
  return (
    <>
      <Modal
        {...props}
        size='xl'
        aria-labelledby='contained-modal-title-vcenter'
        dialogClassName='modal-90w'
        centered
      >
        <Modal.Body>
          <Image
            src={'/images/Web Development Program.jpg'}
            // style={{ width: "5rem" }}
            alt='Web Development Workshop'
            fluid
          />
          <p
            style={{
              fontSize: 20 + 'px',
              textAlign: 'center',
              fontWeight: 'bold',
            }}
          >
            {' '}
            All the students are informed that we are organizing one day
            workshop on "Web Development" by collaborating with XDezo Academy on
            Thursday, 28 April, 2022. Please fill up the registration form to
            attend the program. Short Link:-
            <a href='https://url.xdezo.com/infomax-soch-program'>
              <u>https://url.xdezo.com/infomax-soch-program</u>
            </a>{' '}
            - Infomax College of IT & Management
          </p>
        </Modal.Body>
      </Modal>
    </>
  )
}

function MeritListModal(props) {
  return (
    <>
      <Modal
        {...props}
        size='lg'
        aria-labelledby='contained-modal-title-vcenter'
        dialogClassName='modal-90w'
        centered
      >
        <Modal.Body>
          <Image
            src={'/images/CSIT_list_of_students_2078_batch.jpg'}
            // style={{ width: "5rem" }}
            alt='Soch College Merit List'
            fluid
          />
        </Modal.Body>
      </Modal>
    </>
  )
}

function AdmissionModal(props) {
  return (
    <>
      <Modal
        {...props}
        size='lg'
        aria-labelledby='contained-modal-title-vcenter'
        dialogClassName='modal-90w'
        centered
      >
        <Modal.Body>
          <Image
            src={'/images/soch_college.jpg'}
            // style={{ width: "5rem" }}
            alt='Soch College Admission'
            fluid
          />
        </Modal.Body>
      </Modal>
    </>
  )
}

{
  /* 
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
} */
}

function App() {
  const [showWorkshop, setShowWorkshop] = React.useState(false)

  const [showMeritList, setShowMeritList] = React.useState(false)

  const [showAdmission, setShowAdmission] = React.useState(true)
  return (
    <div className='App'>
      <WorkshopModal
        className='workshopmodal'
        show={showWorkshop}
        onHide={() => {
          setShowWorkshop(false)
          setShowAdmission(true)
        }}
      />
      <MeritListModal
        className='meritmodal'
        show={showMeritList}
        onHide={() => setShowMeritList(false)}
      />
      <AdmissionModal
        className='admissionmodal'
        show={showAdmission}
        onHide={() => setShowAdmission(false)}
      />
      <Homepage />
    </div>
  )
}

export default App
