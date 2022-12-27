import React from "react";

class DestructureObj2Cls extends React.Component{
  
  
    render(){
        const{c,y}=this.props
        return(<>
        <h1>hello object {c}{y} </h1>
        </>)
    }
}

export default DestructureObj2Cls;