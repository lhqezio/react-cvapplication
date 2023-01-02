import React,{Component} from "react";
import Addsection from "./exp-components/addsection";

class eduexperience extends Component{
    constructor(props){
        super(props);
        this.fields = ["school","degree","start","end","description"];
    };
    render(){
        return(
            <Addsection fields={this.fields} name={"Education"}/>
        );
    }
}

export default eduexperience;