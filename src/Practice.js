import React, { useState } from 'react';
import './index.css';

const Practice = () => {
    const [counter,setCounter] = useState(0);

    const Increment = () =>{
        if (counter==20){
            return 20;
        }
        else{
            setCounter(counter+1);
        }
    }

    const Decrement = () =>{
        if (counter==0){
            return 0;
        }
        else{
            setCounter(counter-1);
        }
    }

  return (
    <>
      <div className="container-fluid py-3">
        <div className="container justify-content-center">
            <h2>{counter}</h2>
            <button className="btn btn-primary mx-2" onClick={Increment}>Increment</button>
            <button className="btn btn-success" onClick={Decrement}>Decrement</button>
        </div>
      </div>
    </>
  )
}

export default Practice
