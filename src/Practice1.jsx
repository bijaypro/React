import React from "react";
import Practice2 from "./Practice2";

const Practice1=()=>{

    let funct=()=>{
        return(<h1>function inside function</h1>)
    }
let a=20;
return(
    <>
      <h1>hi</h1>
      <Practice2  function={funct ()} num={a}/>
    </>
)

}
export default Practice1;