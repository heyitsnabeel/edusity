import React from 'react'
import './Testimonials.css';
import Title from '../Title/Title';
import next_icon from '../../images/next-icon.png';
import back_icon from '../../images/back-icon.png';
import user_1 from '../../images/user-1.png';
import user_2 from '../../images/user-2.png';
import user_3 from '../../images/user-3.png';
import user_4 from '../../images/user-4.png';

const Testimonials = () => {
    let titles = ["GALLERY","Campus Photos"];
  return (
    <>
      <div className="container-fluid">
        <div className="container">
            <Title titles={titles} />

            <div className="row py-5 justify-content-evenly slider border">

                    <button className='bck-btn'>
                    <img src={back_icon} alt="" className='bck-btn-img'/>
                    </button>

                <div className="col-md-5 abcd ">
                    <div className="row test-b1 px-1">
                        <div className='user-1-img'><img src={user_1} alt="" className='user-1-imgg11'/></div>
                        <div className="test-b2">
                            <h5>Emily Williams</h5>
                            <p>Edusity, USA</p>
                        </div>
                    </div>
                    <p className='py-3 px-4'>Choosing to pursue my degree at Edusity was one of the best decisions I've ever made. The supportive community, state-of-the-art facilities, and commitment to academic excellence have truly exceeded my expectations.</p>
                </div>

                <div className="col-md-5 abcd ">
                    <div className="row test-b1 px-1">
                        <div className='user-1-img'><img src={user_2} alt="" className='user-1-imgg11'/></div>
                        <div className="test-b2">
                            <h5>William Jackson</h5>
                            <p>Edusity, USA</p>
                        </div>
                    </div>
                    <p className='py-3 px-4'>Choosing to pursue my degree at Edusity was one of the best decisions I've ever made. The supportive community, state-of-the-art facilities, and commitment to academic excellence have truly exceeded my expectations.</p>
                </div>

                <button className='bck-btn'>
                    <img src={next_icon} alt="" className='bck-btn-img'/>
                </button>

            </div>
        </div>
      </div>
    </>
  )
}

export default Testimonials;
