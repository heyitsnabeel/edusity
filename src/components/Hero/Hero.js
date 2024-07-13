import React from 'react';
import './Heo.css';
import dark_arrow from '../../images/dark-arrow.png'

const Hero = () => {
  return (
    <>
      <div className="container-fluid hero ">
        <div className="col-md-6 hero-b1">
            <div className='hero-text text-center '>
            <h1 className="hero-text1"><b>We Ensure better education for a better world</b></h1>
            <p>Our cutting-edge curriculum is designed to empower students with the knowledge, skills, and experiences needed to excel in the dynamic field of education</p>
            <button className="btn hero-btn px-4 py-2">Explore more <img src={dark_arrow} alt="" className='dark_arrow' /></button>
            </div>
            
        </div>
      </div>
    </>
  )
}

export default Hero;
