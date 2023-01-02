import React,{Component} from "react";
import Addsection from "./exp-components/addsection";

class workexperience extends Component{
    constructor(props){
        super(props);
        this.fields = ["company","title","start","end","description"];
    };
    render(){
        return(
            <Addsection fields={this.fields} name={"Work Experience"}/>
        );
    }
}

export default workexperience;