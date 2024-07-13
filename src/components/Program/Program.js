import React from 'react';
import './Program.css';
import program_1 from '../../images/program-1.png';
import program_2 from '../../images/program-2.png';
import program_3 from '../../images/program-3.png';
import program_icon_1 from '../../images/program-icon-1.png';
import program_icon_2 from '../../images/program-icon-2.png';
import program_icon_3 from '../../images/program-icon-3.png';
import Title from '../Title/Title';

const Program = () => {
    let titles = ["OUR PROGRAM","What We Offer"]
  return (
    <>
      <div className="container-fluid mt-5">
        <div className="container">
        <div className="container">
            <Title titles={titles} />

            <div className="row py-5">
                <div className="col-md-4 prog-b1">
                    <img src={program_1} alt="" className='prog-img1'/>
                    <div className="caption ">
                        <img src={program_icon_1} alt="" />
                        <p>Graduation Degree</p>
                    </div>
                </div>
                <div className="col-md-4 prog-b1">
                    <img src={program_2} alt="" className='prog-img1' />
                    <div className="caption ">
                        <img src={program_icon_2} alt="" />
                        <p>Master Degree</p>
                    </div>
                </div>
                <div className="col-md-4 prog-b1">
                    <img src={program_3} alt="" className='prog-img1'/>
                    <div className="caption ">
                        <img src={program_icon_3} alt="" />
                        <p>Post Graduation</p>
                    </div>
                </div>
            </div>
        </div>
        </div>
      </div>
    </>
  )
}

export default Program;
