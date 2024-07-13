import React from 'react';
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import Program from './components/Program/Program';
import About from './components/About/About';
import Campus from './components/Campus/Campus';
import Testimonials from './components/Testimonials/Testimonials';
import Practice from './Practice';

const Home = () => {
  return (
    <>
      <Navbar/>
      <Hero/>
      <Program/>
      <About/>
      <Campus/>
      <Testimonials/>
      <Practice/>
    </>
  )
}

export default Home;
