import React from "react"

class Message extends React.Component{

   state={
    message:"Hi Friends...."
   }
   ClickHandler=()=>{
    this.setState({message:"Good Morning"})
   }
   ClickmeHandler=()=>{
        this.setState({message:"Good Evening"})
   }
    render(){
        return(<>
        <h1>{this.state.message}</h1>
        <button onClick={this.ClickHandler}>Click</button>
        <button onClick={this.ClickmeHandler}>Click on me</button>

        </>)
    }
}
export default Message;