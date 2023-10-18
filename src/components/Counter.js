import React, { useState } from "react";

const Counter = () =>{

    const[count,setCount] = useState(0);

    return(
       <div>
          <h3 id="calc">Count : {count}</h3>
          <button id="incr-cnt" onClick={()=>setCount(count+1)}>0</button>
       </div>
    )
}

export default Counter;