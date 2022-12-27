import React from "react"

class Classstate extends React.Component{

   state={
    name:"Bijay",
    age:26
   }
   stateHandler=()=>{
        this.setState({name:"Pooja"})
   }
   ageHandler=()=>{
        this.setState({age:30})
   }
    render(){
        return(<>
        <h1>My name is {this.state.name} age is {this.state.age}</h1>
        <button onClick={this.stateHandler}>Click</button>
        <button onClick={this.ageHandler}>Click Age</button>
        </>)
    }
}
export default Classstate;