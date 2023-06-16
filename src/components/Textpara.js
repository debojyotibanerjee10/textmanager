import React,{useState} from 'react'
import "./Textpara.css"

export default function Textpara(props) {
    const[text,settext]=useState("");
    const setchange=(e)=>{
        settext(e.target.value);
    }
    const upperchange=()=>{
        let newtext=text.toUpperCase();
        settext(newtext);
    }
    const lowerchange=()=>{
        let newtext=text.toLowerCase();
        settext(newtext);
    }
    const clear=()=>{
        settext("");
    }
  return (
    <>
    <div className='mytext' style={{backgroundColor: (props.theme==="light")?"white":"#051833"}}>
      <h1 className="headingtext" style={{color: (props.theme==="light")?"black":"white"}}>{props.heading}</h1>
      <textarea name="" id="" cols="90" rows="15" value={text} onChange={setchange}></textarea> <br />
      <button disabled={text.length===0} className='uppercase' onClick={upperchange}>Change To Uppercase</button>
      <button disabled={text.length===0} className='lowercase' onClick={lowerchange}>Change To lowercase</button>
      <button disabled={text.length===0} className='cleartext' onClick={clear}>Clear Text</button>
      <div className="textsummary">
        <h2 style={{color: (props.theme==="light")?"black":"white"}}>Your Text Summary</h2>
        <h2 style={{color: (props.theme==="light")?"black":"white"}}>Number Of Characters- {text.length}</h2>
        <h2 style={{color: (props.theme==="light")?"black":"white"}}>Number Of Words- {text.split(" ").filter((element)=>{return element.length!==0}).length}</h2>
      </div>
    </div>
    </>
  )
}
Textpara.defaultProps={
    heading:"Enter heading here"
}
