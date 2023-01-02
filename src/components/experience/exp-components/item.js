import React,{Component} from "react";
import Editablefield from "../../misc/editablefield";
import Uneditableheader from "../../misc/uneditableheader";

class item extends Component{
    constructor(props){
        super(props);
        this.item = Object.values(this.props.item);
    }
   render(){
        return(
            <div className={"edu-item"} id={"e"+this.item[0]}>
                <Uneditableheader text={this.item[0]+1} className={"i-header"}/>
                <Editablefield className={"place"} displaytext={this.item[1]}/>
                <Editablefield className={"title"} displaytext={this.item[2]}/>
                <div className="year">
                    <Uneditableheader text={"From"} className={"year-header"}/>
                    <Editablefield className={"date"} displaytext={this.item[3]}/>
                    <Uneditableheader text={"To"} className={"year-header"}/>
                    <Editablefield className={"date"} displaytext={this.item[4]}/>
                </div>
                <Uneditableheader text={"Description"} />
                <Editablefield className={"desc"} displaytext={this.item[5]}/>
            </div>
        );
    }
}

export default item;