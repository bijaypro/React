import React from "react";

const ClstoFun2=(props)=>{
   console.log("props",props)
     return(<>
        <h1> my name is {props.name} and age is {props.age} and my favourite color is {props.color}</h1>
        {props.getDataVal}
     </>)
}
export  default ClstoFun2;