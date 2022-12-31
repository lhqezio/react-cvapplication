import React,{Component} from "react";
import Editablefield from "./editablefield";

class GeneralInfo extends Component {
    render(){
        return(
            <div id={"gen-info"}>
               <div id={"first-col"}>
                <Editablefield className={"name"} displaytext={"First Name"}/>
                <Editablefield className={"name"} displaytext={"Last Name"}/>
                <Editablefield className={"occu"} displaytext={"Occupation"}/>
               </div>
               <div id={"second-col"}>
                <Editablefield className={"email"} displaytext={"Email"}/>
                <Editablefield className={"phone"} displaytext={"Phone"}/>
                <p><b id="dot">&#183;</b>   Address</p>
                <Editablefield className={"st-no"} displaytext={"Street No"}/>
                <Editablefield className={"st-name"} displaytext={"Street Name"}/>
                <Editablefield className={"city"} displaytext={"City"}/>
                <Editablefield className={"state"} displaytext={"Province"}/>
               </div>
            </div>
        );
    };
}

export default GeneralInfo;