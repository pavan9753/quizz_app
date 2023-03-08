import React from 'react'
import "./Question.css"
const Question = (props) => {
  return (
    <div className='container'>
        <h2>{props.question}</h2>
        <div className='button-container'>
            <button className='btn' onClick={()=>props.buttonclick(0)}>{props.option1}</button>
            <button className='btn' onClick={()=>props.buttonclick(1)}>{props.option2}</button>
            <button className='btn' onClick={()=>props.buttonclick(2)}>{props.option3}</button>
            <button className='btn' onClick={()=>props.buttonclick(3)}>{props.option4}</button>
        </div>
    </div>
  )
}

export default Question;