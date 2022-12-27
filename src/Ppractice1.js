import React from "react"
import Ppractice2 from "./Ppractice2"

class Ppractice1 extends React.Component{
    constructor(){
        super()
    }

     fun=()=>{
        return(
            "my function 12345"
        )
    }
    render(){
        return(<>
             <Ppractice2 myfun={this.fun()}/>
        </>)
    }
}
export default Ppractice1