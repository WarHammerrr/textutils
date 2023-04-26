import React from 'react'
import { useState } from 'react'

export default function Textform(props) {
    const [text,setText]= useState('Enter Text here..');
    function handleonChange(event){
        setText(event.target.value)
        
    }
    function handleonupClick(){
        console.log("you have clicked button");
        let newtext=text.toUpperCase();
        setText(newtext);
        props.showAlert("Converted to UpperCase !","success")
    }
    function handleonclearClick(){
      let newtext=' ';
      setText(newtext);
      props.showAlert("Cleared Text!","success")
  }
    function handleonlowClick(){
        console.log("you have clicked button");
        let newtext=text.toLowerCase();
        setText(newtext);
        props.showAlert("Converted to LowerCase !","success")
    }
    function handleonInvClick(){
      
const hasUpperCase = /[A-Z]/.test(text);
      if(hasUpperCase){
        let n=text.toLowerCase();
        setText(n);
        
      }
      else{
        let n=text.toUpperCase();
        setText(n);
      }
    }
   
  return (
        <div className='container' style={{color:props.mode==='light'?'black':'white'}}>
<div className="mb-3" >
    <h1 >{props.heading}</h1>
  <textarea className="form-control" value={text} style={{backgroundColor:props.mode==='light'?'white':'grey',color:props.mode==='light'?'black':'white'}}onChange ={handleonChange}  id="exampleFormControlTextarea1" rows="8"></textarea>
</div>

<button className="btn btn-primary mx-1" onClick={handleonupClick}>Convert To UpperCase</button>
<button className="btn btn-primary mx-1" onClick={handleonlowClick}>Convert To LowerCase</button>
<button className="btn btn-primary mx-1" onClick={handleonclearClick}>Clear Text</button>
<button className="btn btn-primary mx-1" onClick={handleonInvClick}>Inverse</button>
<div className='Container my-3'>
<h6>{text.split(" ").length} words and {text.length} characters</h6>
<h5>Text Summary</h5>
<p>{text}</p>
</div>
    </div>
  );
}
