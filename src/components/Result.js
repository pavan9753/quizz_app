import React from 'react'
// import axios from "axios";
import "./RResult.css";
import {useLocation, useNavigate} from "react-router-dom";
const Result = (props) => {
    const navigate=useNavigate();
    const fval=useLocation();
    console.log(fval.state)
  return (
    <div>
        {/* <h1>{props.fvalue}</h1> */}
        <h2 className='heading2'>You scored {fval.state.fvalue}/5  Correctly</h2>
        {/* <p>dkhfdS</p> */}
        {/* <h2>Hey</h2> */}
        <button className='start'  onClick={()=>navigate("/")} >Start Quizz</button>
        {/* <p>jfdlkj </p> */}
    </div>
  )
}

export default Result