
// not in use

import React from 'react'
import { Image } from "react-bootstrap";

function Popup(props) {
     return (
          <div className='popup-box'>
               <div className='box'>
                    {/* <img src="./images/soch_college.jpg" alt="college image"/> */}
                    <Image
                    src={"/images/soch_college.jpg"}
                    alt=""
                    fluid
                  />
                    <button className='btn-close' onClick={props.handleClose}>x</button>
               </div>
          </div>
     );
}

export default Popup
