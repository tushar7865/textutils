import React from 'react'
import { useState } from 'react';

function Textform(props) {
  
  const handleUPPerClick= ()=>{
    // console.log("UpperCase was Clicked"+text);
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Converted to UpperCase!", "success");
  } 
  const handleloClick= ()=>{
    // console.log("UpperCase was Clicked"+text);
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Converted to lowerCase!", "success");
  } 
  const[Italic, setItalic]=useState(false)
  const handleItalic =()=>{
    style={ fontStyle: 'Italic' ? 'italic' : 'normal'};
  }
  
  const handleOnChange= (event)=>{
    // console.log("onchange");
    setText(event.target.value);
  }
  
  const [text,setText]=useState("");  
  return( 
    <>
   <div className="container" style={{color: props.mode === 'dark'?'white':'black'}}>
    <h1>{props.heading}</h1>
    <div className="mb-3">
      <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor:props.mode==='dark'?'grey':'white'}} cols="30" rows="8"></textarea>
    </div>
   </div>
      <button className="btn btn-primary mx-3" onClick={handleUPPerClick}>Convert to UpperCase</button>
      <button className="btn btn-primary mx-3" onClick={handleloClick}>Convert to LowerCase</button>
      <button className="btn btn-primary mx-3" onClick={handleItalic}>Italic</button>
    <div className="container my-3" style={{color:props.mode==='dark'?'white':'black'}}>
    <h1>Your text summary</h1>
    <p>{text.split("").length} words and {text.length} characters</p>
    <p>{0.008* text.split("").length} Minutes read</p>
    <h2>Preview</h2>
    <p>{text.length>0?text:"Enter something in the above textarea to preview here"}</p>
   </div>
    
   </>
  )
}

  
export default Textform;