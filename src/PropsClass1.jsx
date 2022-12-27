import React from "react";
import PropsClass2 from "./PropsClass2";

class PropsClass1 extends React.Component{
    render(){
        return(<>
        <h1>hello</h1>
        <PropsClass2 name="Bijay"/>
        </>)
    }
}

export default PropsClass1;