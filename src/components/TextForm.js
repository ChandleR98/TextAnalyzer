
import React,{useState} from 'react'
import PropTypes from 'prop-types'



export default function TextForm(props) {
    const handleUpClick=()=>{
        // console.log("Upper case was clicked");
        let newText=text.toUpperCase();
        setText(newText);
        props.showAlert(": Converted to Uppercase","success");
    }
    const handleDnClick=()=>{
        
        let newText=text.toLowerCase();
        setText(newText);
        props.showAlert(": Converted to Lowercase","success");
    }
    const handleClrClick=()=>{
       
        let newText='';
        setText(newText);
        props.showAlert(": Clear","success");
    }
    const handleOnChange=(event)=>{
        // console.log("On Change");
        setText(event.target.value);
    }
    const handleCopy=()=>{
        console.log("I am copy");
        var text=document.getElementById("myBox");
        text.select();
        navigator.clipboard.writeText(text.value);
        props.showAlert(": Copied","success");
    }
    const handleSpaces=()=>{
        let newText=text.split(/[ ]+/);
        setText(newText.join(" "))
        props.showAlert(": Spaces Removed","success");
    }
    const [text, setText] = useState('');
    // text="new text"//wrong way
    // setText=("new text")//correct way
    return (
        <>
        <div className="container" style={{color:props.mode==='dark'?'white':'#042743'}}>
        <h1>{props.heading}</h1>
<div className="mb-3">
  <textarea className="form-control" id="myBox" 
  value={text} rows="8" onChange={handleOnChange} style={{backgroundColor:props.mode==='dark'?'grey':'white',color:props.mode==='dark'?'white':'#042743'}}></textarea>
 </div>
 <button className="btn btn-primary mx-2" onClick={handleUpClick}>Convert to Uppercase</button>
 <button className="btn btn-primary mx-2" onClick={handleDnClick}>Convert to Lowercase</button>
 <button className="btn btn-primary mx-2" onClick={handleClrClick}>Clear</button>
 <button className="btn btn-primary mx-2" onClick={handleCopy}>Copy</button>
 <button className="btn btn-primary mx-2" onClick={handleSpaces}>Remove spaces</button>



</div>
<div className="container my-3" style={{color:props.mode==='dark'?'white':'#042743'}}>
    <h2>Your Text Summary</h2>
    <p>{text.split(" ").length} Words and {text.length} Characters </p>
    <p>{0.008 * text.split(" ").length } Minutes read</p>
    <h2>Preview</h2>
    <p>{text.length>0?text:"Enter text to preview"}</p>   
</div>
</>
    )
}
