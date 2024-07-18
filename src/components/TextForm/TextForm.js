import React,{useState} from 'react'



export default function TextForm(props) {
  const handleUpClick = () =>{
    // console.log("UpperCase Was Clicked" +text);
    let newText = text.toUpperCase();
    setText(newText)
    
  }
  const handleOnChange = (event) =>{
    // console.log("On change");
    setText(event.target.value);
  }
  const handleLoClick = () =>{
    // console.log("UpperCase Was Clicked" +text);
    let newText = text.toLowerCase();
    setText(newText);
    
  }
  const handleClearClick = () =>{
    // console.log("UpperCase Was Clicked" +text);
    let newText = '';
    setText(newText)
    
  }
  const handleRenameClick = () =>{
    // console.log("UpperCase Was Clicked" +text);
    let newText = text.concat("send to me");
    setText(newText)
    
  }
  
  
  
  
  const [text, setText] = useState('Enter the text here');
  // text = "jfsdfkl" wrong way to set state 
  // setText  ("New Change") //correct way to declare state
  return (
     <>
    <div className="container">
      <h1>{props.heading}</h1>
        <div className="mb-3">
            <label for="myBox" className="form-label">{props.heading}</label>
            <textarea className="form-control" value={text} onChange={handleOnChange} id="myBox" rows="8" ></textarea>
        </div>
        <button className='btn btn-primary mx-2' onClick={handleUpClick}>Convert To Upper</button>
        <button className='btn btn-primary mx-2' onClick={handleLoClick}>Convert To Lower</button>
        <button className='btn btn-primary mx-2' onClick={handleClearClick}>Clear Text</button>
        <button className='btn btn-primary mx-2' onClick={handleRenameClick}>Rename Text</button>
    </div>
    <div className="container my-3">
      <h2>Your Text Summary</h2>
      <p>{text.split(" ").length} words and {text.length} characters </p>
      <p>{0.008 * text.split(" ").length } Minutes Read </p>
      <h3>preview</h3>
      <p>{text}</p>
    </div>
    </>
  )        
}
// hooks = without class making it helps me to use class features 
// useState = writeen the array restrucring use 
// how to insert a bootstrap in html = rename for=htmlFor, class= className, href="#" href ="\"