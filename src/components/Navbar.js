import React from 'react'
import './Navbar.css';
// import axios from "axios";
import {useNavigate} from "react-router-dom";
const Navbar = () => {
    const navigate=useNavigate();
  return (
    <div>
        <button className='block' onClick={()=>navigate("/start")} >Start Quizz</button>
    </div>
  )
}

export default Navbar;
