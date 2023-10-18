import React, { useState } from "react";

const Memo = () =>{
    const[text,setText] = useState("");
    const[memo,setMemo] = useState([]);

   function submitMemo(){
    if(text.length>5)
    {
        setMemo([...memo,text]);
        setText("");
    }
    else{
        setText("");
    }
      
   }

    return(
       <div>
           <h3>Memo</h3>
           <input onChange={e=>setText(e.target.value)} value={text} />
           <button id="skill-input" onClick={submitMemo}>Submit</button>
           <ul>
            {
                memo.map((ele,idx)=>(
                    <li key={idx}>{ele}</li>
                ))
            }
           </ul>
       </div>
    )
}

export default Memo;