import React from "react";

class Practice2 extends React.Component{
    constructor(props){
        super(props)
    }
    render(){
        return(
            <>
            <p> my function is {this.props.function} and number is {this.props.num}</p>
            </>
        )
    }
}
export default Practice2;