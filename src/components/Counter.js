import React, { useState } from "react";

const Counter = () =>{

    const[count,setCount] = useState(0);

    return(
       <div>
          <h3 id="calc">Count : {count}</h3>
          <button id="incr-cnt" onClick={()=>setCount(count+1)}>0</button>
          <h3>Expensive Calculation</h3>
          <p>1000000000</p>
       </div>
    )
}

export default Counter;