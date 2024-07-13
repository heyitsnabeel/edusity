import React from 'react';
import Title from '../Title/Title';
import './Campus.css';
import gallery_1 from '../../images/gallery-1.png';
import gallery_2 from '../../images/gallery-2.png';
import gallery_3 from '../../images/gallery-3.png';
import gallery_4 from '../../images/gallery-4.png';
import white_arrow from '../../images/white-arrow.png';

const Campus = () => {
    let titles = ["GALLERY","Campus Photos"];
  return (
    <>
      <div className="container-fluid">
        <div className="container">
            <Title titles={titles} />

            <div className="container-fluid ">
            <div className="col-md-10 ustify-content-center cmps-b1">
                <div className="row j py-5">
                    <div className="col-md-3 campus-b1"><img src={gallery_1} alt="" className='campus-img1'/></div>
                    <div className="col-md-3"><img src={gallery_2} alt="" className='campus-img1'/></div>
                    <div className="col-md-3"><img src={gallery_3} alt="" className='campus-img1'/></div>
                    <div className="col-md-3"><img src={gallery_4} alt="" className='campus-img1'/></div>
                </div>

                <button className="cmps-btn px-4 py-2 ">See more here <img src={white_arrow} alt="" className='dark_arrow'/></button>
            </div>
            </div>
        </div>
      </div>
    </>
  )
}

export default Campus;
