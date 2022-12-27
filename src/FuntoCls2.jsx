import React from "react";

class FuntoCls2 extends React.Component{
    constructor(props){
        super(props)
    }
    render(){
        return(<>
        <h1>hello {this.props.props1} {this.props.props2}</h1>
        <p>{this.props.fun1}</p>
        </>)
    }
}

export default FuntoCls2;