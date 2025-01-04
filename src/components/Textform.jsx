import React, {useState} from 'react';


export default function Textform(props) {
   

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
    const [text, setText] = useState("Enter Text Here");
  return (
    <div className="container">
        <div className=" mb-3">
            <h1>{props.heading}</h1>
            <textarea className="form-control" value={text}  onChange={handleOnchange} id="MyTextForm" rows="8"></textarea>
        </div>
        <button className="btn btn-primary m-2" onClick={handleUperCase}  >Convert to Uppercase</button>
        <button className="btn btn-primary m-2" onClick={handleLowerCase} >Convert to Lowercase</button>

    </div>
  )
}
