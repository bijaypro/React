import React from "react";
import FuntoCls2 from "./FuntoCls2";

const FuntoCls1=()=>{
   let a="Good";
   let b="Morning";

   const fun = ()=>{
      return <h1>hi</h1>;
   }
     return(<>
        <h1> my props</h1>
        <FuntoCls2 props1={a} props2={b} fun1={fun()} />
     </>)
}
export  default FuntoCls1;