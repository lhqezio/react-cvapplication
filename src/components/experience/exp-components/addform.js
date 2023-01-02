import React,{Component} from "react";

class addform extends Component{
    render(){
        return(
            <form className={"add-form"}>
                {
                    this.props.items.map((field,i) => {
                        return(
                            <div key={field+String.toString(i)}>
                                <input type={"text"} id={"n"+field} placeholder={field}/>
                                <br></br>
                            </div>
                        );
                    })
                }
                <button onClick={this.props.save}>Save</button>
            </form>
        );
    }
}

export default addform;