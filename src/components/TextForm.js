/*
    What i also learned today from this video are as written below:
1. State=condition of any component for eg. textarea component might be empty sometime , sometimes it has letters .
2. Hooks= A method which helps us to use features of classes in function based component this is because developer like us prefer to use function over classes.
3. Hooks has this part ---->   const [count,setCount)=useState("Hello Universe"); 
Here in above hook the value of count is Hello Universe . count is array variable so that we just can't update or change its value like normal variable

*/
import React, { useState } from 'react'

export default function TextForm(props) {
    const handleUpClick = () =>{
        let newText = text.toUpperCase();
        setText(newText);
    }
    const handleDownClick = () =>{
        let newText = text.toLowerCase();
        setText(newText);
    }
    const handleOnChange = (event) =>{
        setText(event.target.value);
    }
    const [text,setText] = useState("Enter text here 2")
    return (
        <>
    <div className="container">
        <h1>{props.heading}</h1>
        <div className="form-group mb-3">
        <textarea className="form-control" value={text} onChange={handleOnChange} id="myBox" rows="8"></textarea>
        </div>
        <button className="btn btn-outline-primary mx-2" onClick={handleUpClick}>Convert to UpperCase</button>
        <button className="btn btn-outline-primary" onClick={handleDownClick}>Convert to LowerCase</button>
    </div>
        <div className="container my-3">
        <h1>Your text summary</h1>
        <p>{text.split(" ").length} words {text.length} characters {text.split(".").length-1} Assertive sentence {text.split("?").length-1} interrogative sentence .</p>
        <p>{0.008 * text.split(" ").length} Minutes read</p>
        <h2>Preview</h2>
        <p>{text}</p>
        </div>
    </>
  )
}
