import React from 'react';
import './About.css';
import about_img from '../../images/about.png';
import play_icon from '../../images/play-icon.png'

const About = () => {
  return (
    <>
     <div className="container-fluid">
        <div className="container py-4">
            <div className="row py-5 justify-content-center">
                <div className="col-md-4 about-b1 ">
                    <img src={about_img} alt="" className="about-img" />
                    <img src={play_icon} alt="" className="about-icon" />
                </div>
                <div className="col-md-6 px-3">
                    <h6 className='py-2 abt-txt1'><b>ABOUT UNIVERSITY</b></h6>
                    <h2>Nurturing Tomorrow's Leaders</h2>
                    <h2>Leaders Today</h2>
                    <p>Embark on a transformative educational journey with our university's comprehensive education programs. Our cutting-edge curriculum is designed to empower students with the knowledge, skills, and experiences needed to excel in the dynamic field of education.</p>
                    <p>With a focus on innovation, hands-on learning, and personalized mentorship, our programs prepare aspiring educators to make a meaningful impact in classrooms, schools, and communities.</p>
                    <p>Whether you aspire to become a teacher, administrator, counselor, or educational leader, our diverse range of programs offers the perfect pathway to achieve your goals and unlock your full potential in shaping the future of education.</p>
                </div>
            </div>
        </div>
     </div>
     
    </>
  )
}

export default About
