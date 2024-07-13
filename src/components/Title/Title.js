import React from 'react';
import './Title.css';

const Title = (props) => {
    const [ttl1,ttl2]=props.titles;
  return (
    <>
      <div className='text-center py-4'>
                <p className='my-0 prog-para1'><b>{ttl1}</b></p>
                <h2 className='my-0'><b>{ttl2}</b></h2>
        </div>
    </>
  )
}

export default Title;
