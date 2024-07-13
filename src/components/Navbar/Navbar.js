import React, { useEffect } from 'react';
import logo from '../../images/logo.png';
import './navbar.css';
import { useState } from 'react';

const Navbar = () => {

  const[sticky,setSticky]=useState(false);
  
  useEffect(()=>{
    window.addEventListener('scroll',()=>{
      window.scrollY > 50 ? setSticky(true):setSticky(false);
    })
  },[])

  return (
    <>
      <div className={`container-fluid nav-b1 py-2 ${sticky?'dark-nav':''}`}>
        <div className="row">
            <div className="col-md-3 ">
                <img src={logo} alt="" className='logo '/>
            </div>
            <div className="col-md-7">
                <ul className="nav justify-content-end">
                    <li className="nav-link text-white">Home</li>
                    <li className="nav-link text-white">Program</li>
                    <li className="nav-link text-white">About us</li>
                    <li className="nav-link text-white">Campus</li>
                    <li className="nav-link text-white">Testimonials</li>
                    <button className='nab-btn px-4 py-2'>contact us</button>
                </ul>
            </div>
        </div>
      </div>
    </>
  )
}

export default Navbar;
