import React from "react"

class Counter extends React.Component{

   state={
    count:0
   }
   IncrementHandler=()=>{
        this.setState({count:this.state.count+1})
   }
   DecrementHandler=()=>{
        this.setState({count:this.state.count-4})
   }
    render(){
        return(<>
        <h1>{this.state.count}</h1>
        <button onClick={this.IncrementHandler}>Increment</button>
        <button onClick={this.DecrementHandler}>Decrement</button>

        </>)
    }
}
export default Counter;