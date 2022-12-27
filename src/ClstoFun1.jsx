import React from "react";
import ClstoFun2 from "./ClstoFun2";

class ClstoFun1 extends React.Component{
    constructor(){
        super();
        this.state={
            name:"Bijay",
            age:"28",
            color:"Green"
        }
    }

    getData(){
        return <h1>hi</h1>
    }
    render(){
        return(<>
        <h1>hello </h1>
        <ClstoFun2 name={this.state.name} age={this.state.age} color={this.state.color} getDataVal={this.getData}/>
        </>)
    }
}

export default ClstoFun1;