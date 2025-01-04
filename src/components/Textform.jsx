import React, {useState} from 'react';



export default function Textform(props) {
    const [text, setText] = useState("");

   let myStyle={ 
         height: 'auto',
         minHeight: '100px', 
         maxHeight: '500px',
         }; 
    /* Event handing  */
    const handleUperCase = ()=>{
        // console.log("UpperCase");
        let newText = text.toUpperCase();
        setText(newText)
    }

    const handleOnchange = (event)=>{
        setText(event.target.value);
    }
    /* Event handing  */

    const handleLowerCase = ()=>{
        // console.log("handleTolowerCase");
        let lowerText = text.toLowerCase();
        setText(lowerText);
    }

    const handleCopyText = ()=>{
        let textBox = document.getElementById("MyTextForm");
        navigator.clipboard.writeText(textBox.value);
    }
    const handleExtraSpace = ()=>{
        let extraspace = text.trim()  
        .replace(/\s+/g, ' ')  
        .replace(/[_-](.)/g, (_, char) => char.toUpperCase())  
        .replace(/^([A-Z])/, match => match.toLowerCase());  
        setText(extraspace);
    }

    const handleClearText = ()=>{
        setText("");
    }


  return (
    <>
    <div className="container">
    <div className=" mb-3">
        <h1>{props.heading}</h1>
        <textarea className="form-control" value={text}  onChange={handleOnchange} id="MyTextForm" rows="8"></textarea>
    </div>
    <button className="btn btn-primary m-2" onClick={handleUperCase}  >Convert to Uppercase</button>
    <button className="btn btn-primary m-2" onClick={handleLowerCase} >Convert to Lowercase</button>
    <button className="btn btn-primary m-2" onClick={handleExtraSpace} >Extra Space</button>
    <button className="btn btn-primary m-2" onClick={handleCopyText} >Copy Text</button>
    <button className="btn btn-primary m-2" onClick={handleClearText} >Clean</button>


    <div className="my-4">
    <h5>Text summary</h5>
    <p>{text.split(" ").length} words and {text.length} characters</p>
    <p>{0.008*text.split(" ").length} per minute read word. </p>
    <h5>Preview</h5>
    <p>{text.length>0?text:" Enter your text in Text area to Preview."}</p>
    <p> <canvas id="screenshotCanvas"></canvas></p>
   </div>
   </div>
   
</>
  )
}
