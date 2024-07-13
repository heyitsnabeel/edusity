import React, { useState } from 'react';
import './index.css';
import axios from "axios";

const Popup = ({ show }) => {
  const [adminregister, setAdminregister] = useState({});

  const InputHandler = (e) => {
    setAdminregister({ ...adminregister, [e.target.name]: e.target.value });
  }

  const registerAdmin = (e) => {
    e.preventDefault();
    axios.post("https://getform.io/f/azylyzgb", adminregister)
      .then((response) => {
        console.log(response);
        setAdminregister({});
        e.target.reset();
      }).catch(err => console.log(err));
  }

  return (
    <>
      <div className="container-fluid">
        <div className="container ">
          <div className="col-md-5 p-3 pop-div">
            <form onSubmit={registerAdmin} autoComplete='off'>
              <h5 className=''>Talk to us</h5>

              <div className="input-container">
                <input type="text" required name="email" value={adminregister.email || ''} onChange={InputHandler} />
                <label>Email*</label>
              </div>

              <div className="input-container">
                <input type="text" required name="FirstName" value={adminregister.FirstName || ''} onChange={InputHandler} />
                <label>First Name</label>
              </div>

              <div className="input-container">
                <input type="text" required name="LastName" value={adminregister.LastName || ''} onChange={InputHandler} />
                <label>Last Name</label>
              </div>

              <div>
                <input type="checkbox" />
                <span className='pop-span'>I Agree to Flye's terms and conditions, and provide consent to send me communication</span>
              </div>

              <div>
                <button type='submit' className='pop-btn py-2'>Contact Us</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  )
}

export default Popup;
