import React from "react";
import DestructureObj2 from "./DestructuerObj2Fun";

const DestructureObj1=()=>{
   let a="Good";
   let b="Morning";
   let c="bye";
   let d="hello";

     return(<>
        <h1> my props</h1>
        <DestructureObj2 x={a} y={b} c={d}/>
     </>)
}
export  default DestructureObj1;