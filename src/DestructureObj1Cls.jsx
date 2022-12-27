import React from "react";
import DestructureObj2Cls from "./DestructureObj2Cls";

class DestructureObj1Cls extends React.Component{
    constructor(){
        super();
        this.state={
            name:"Bijay",
            age:"28",
            color:"Green",
            location:"Banglore"
        }
    }

    render(){
        return(<>
        <h1>hello </h1>
        <DestructureObj2Cls x={this.state.name}y={this.state.age}z={this.state.color}c={this.state.location}/>
        </>)
    }
}

export default DestructureObj1Cls;