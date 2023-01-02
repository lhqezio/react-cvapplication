import React,{Component} from "react";
import Uneditableheader from "../../misc/uneditableheader";
import Addclearbuttons from "./addclearbuttons";
import List from "./list";
import AddForm from "./addform";

class addsection extends Component {
    constructor(props){
        super(props);
        this.state = {
            items: [],
            addmode: false,
         };
        this.add = this.add.bind(this);
        this.clear = this.clear.bind(this);
        this.save = this.save.bind(this);
    }
    add(){
        if(this.state.addmode){
            this.setState({addmode: false});
        }
        else{
            this.setState({addmode: true});
        }
    };
    clear(){
        this.setState({items: []});
    };
    save(e){
        this.setState({addmode: false});
        let newEdu = {
            id: this.state.items.length,
            place:document.getElementById(`n${this.props.fields[0]}`).value,
            title:document.getElementById(`n${this.props.fields[1]}`).value,
            start:document.getElementById(`n${this.props.fields[2]}`).value,
            end:document.getElementById(`n${this.props.fields[3]}`).value,
            desc:document.getElementById(`n${this.props.fields[4]}`).value,
        };
        this.setState({items: this.state.items.concat(newEdu)});
        
    }
    render(){
        return(
            <div className={"msect"}>
                <Uneditableheader className={"s-header"} text={this.props.name}/>
                <div id={"edu-body"}>
                    <List items={this.state.items}/>
                    {this.state.addmode ? <AddForm save={this.save} items={this.props.fields}/> : null }
                    <Addclearbuttons isEmpty={this.state.items.length === 0} add={this.add} clear={this.clear} addmode={this.state.addmode}/>
                </div>
            </div>
        );
    };
}

export default addsection ;