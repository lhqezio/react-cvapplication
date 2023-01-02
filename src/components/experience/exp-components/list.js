import React,{Component} from "react";
import EduItem from "./item";

class list extends Component{
    constructor(props){
        super(props);
        this.state = {
            items: [],
        };
    }
    componentDidMount(){
        this.setState({items: this.props.items});
    }
    componentDidUpdate(prevProps){
        if(prevProps.items !== this.props.items){
            this.setState({items: this.props.items});
        }
    }
    render(){
        return(
            <div id={"edu-dis"}>
                {this.state.items.map((item,i) => {
                    return(
                        <EduItem item={item} key={"e"+i}/>
                    );
                })}
            </div>
        );
    };
}

export default list;