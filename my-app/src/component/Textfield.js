import React,{useState} from 'react'
import './field.css'



export default function Textfield(probs)
{
   
    function handle()
    {
        //  console.log("Upper text" + text)
        let newtext = text.toUpperCase()
        settext(newtext)
    }

    function clear()
    {
        //  console.log("Upper text" + text)
        
        settext(" ")
    }
    function clickhandler(event)
    {
        // console.log("on change")
        settext(event.target.value)
    }

    function handleinput()
    {
           let newtext1 = text.toLowerCase();
           settext(newtext1)
    }
   

    const [text,settext] = useState("")
    // const [text1,settext1] = useState('enter a text')
    return (

        <>
        <div class="form-check">
          <h3>{probs.heading}</h3>
          <label >Check me out</label><br/>
          <textarea value={text} onChange={clickhandler}  placeholder="Please Enter Your text"></textarea><br/>
          <button onClick={handle}>Covert to Upper Case</button>
          <button onClick={handleinput}>Covert to Lower Case</button>
          <button onClick={clear}>Clear Text</button>
        </div>
      
        <div className="preview-container">
       <div className="preview-info">
          <p>{text.split(" ").length} Words and {text.length} letter</p>
          <p>You will take {0.008 * text.split(" ").length} min for read</p>
          <h4>Preview</h4>
          <p>{text}</p>
          </div>
          </div>
        </>
        
          )
          
      }