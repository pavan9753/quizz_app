import React from 'react'
import data from "./data.js";
import Question from './Question';
import Result from './Result.js';
import { useState } from 'react';
import "./Parent.css"
// import axios from "axios";
import {useNavigate} from "react-router-dom";
const Parent = () => {
    const navigate=useNavigate();
    var a=[0,3,0,0,1];
    // var b=[];
    var xx=0;
    const [b,setB]=useState([])
    const [fvalue,setFvalue]=useState(0);
    const [score,setScore]=useState(0);
    const [value,setValue]=useState(false);
    const buttonclick=(pos)=>
    {
      b.push(pos)
      xx++;
      var up=score+1;
      setScore(up);

      if(b.length===5) 
      {
        
        check();
      }
    //   if(xx===5) check();
      
        
        // console.log("xx in",xx)
      
    }

    const check=()=>  {
        var ff=0;
        for(var i=0;i<a.length;i++)
        {
            if(b[i]===a[i]) ff++;
        }
            console.log("fval in check",fvalue)
        setFvalue(ff);
      }
    const arr=data.map((item,pos)=>
  {
    
    
    return <Question question={item.question} option1={item.option1} option2={item.option2} option3={item.option3} option4={item.option4} buttonclick={buttonclick}/>
    

  })

const toggle=()=>
{
    var up=!value;
    setValue(up);
    // check()

    navigate("/results",{state:{fvalue:fvalue}})
}
  
  console.log("b len",b.length)
  return (
    <div>
        {
            arr
           
        }
         {score===5?<button className='result' onClick={()=>toggle()}>Show Results</button>:<p>    </p>
         }

{console.log("ff value ",fvalue)}
        {/* {value===true?<Result fvalue={fvalue}/>:null} */}


         
        {/* {console.log(b.length)}
        {console.log("xx before ",xx)}
        {console.log("xx after ",xx)} */}

        

       
        
    </div> 
  )
}

export default Parent