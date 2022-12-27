import React from "react";

class PropsClass2 extends React.Component{
    constructor(props){
        super(props)
    }
    render(){
        return(<>
        <h1>Welcome i {this.props.name}</h1>
        </>)
    }
}

export default PropsClass2;