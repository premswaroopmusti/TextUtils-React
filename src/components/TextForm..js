import React, {useState} from 'react'

export default function TextForm(props) {

  const handleUpClick = ()=>{
    // console.log("Uppercase was clicked" + text);
    let newText = text.toUpperCase();
    setText(newText);
  }

  const handleLoClick = ()=>{
    let newText = text.toLowerCase();
    setText(newText);
  }

  const handleClearClick = ()=>{
    
    setText("");
  }

  const handleOnChange = (event)=>{
     // console.log("On change");
     setText(event.target.value);
  }

  // handle extra spaces
  const handleExtraSpaces = () => {
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "))
  }

  const handleCopy = () => {
    var text = document.getElementById("myBox");
    text.select();
    navigator.clipboard.writeText(text.value)
  }

  const [text, setText] = useState("");

  return (
    <>
    <div className="container">
       <h1>{props.heading}</h1>
       <div className="mb-3">

       <textarea className="form-control" value = {text} onChange = {handleOnChange} id="myBox" rows="10"></textarea>
       </div>
       <button className="btn btn-secondary mx-1" onClick={handleUpClick}>Convert to Uppercase</button>
       <button className="btn btn-secondary mx-1" onClick={handleLoClick}>Convert to Lowercase</button>
       <button className="btn btn-secondary mx-1" onClick={handleClearClick}>Clear Text</button>
       <button className="btn btn-secondary mx-1" onClick={handleCopy}>Copy Text</button>
       <button className="btn btn-secondary mx-1" onClick={handleExtraSpaces}>Remove Extra Spaces</button>
    </div>

    <div className="container my-4">
      <h2>Your text Summary</h2>
      <p>{text.split(" ").length} words and {text.length} characters</p>
      <p> {0.008 * text.split(" ").length}  Minutes to read </p>
      <h2>Preview</h2>
      <p>{text.length>0?text:"Enter something in the textbox above to preview it here"}</p>
    </div>
    </>
  )
}
