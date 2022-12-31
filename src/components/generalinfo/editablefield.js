import React ,{ Component } from 'react';
class editablefield extends Component {
    constructor(props){
        super(props);
        this.state = { displaytext: this.props.displaytext,editmode: false };
        this.save = this.save.bind(this);
        this.clicked = this.clicked.bind(this);
        this.handleEnter = this.handleEnter.bind(this);
    };
    save(e){
        this.setState({displaytext: e.target.value});
        this.setState({editmode: false});
        
    };
    clicked(e){
        this.setState({editmode: true});
    };
    handleEnter(e){
        if(e.key === 'Enter'){
            this.save(e);
        }
    };
    render(){
        if(!this.state.editmode){
            return(
                <div className={this.props.className} onClick={this.clicked}>
                    {this.state.displaytext}
                </div>
            );
        }
        else{
            return(
                <div className={this.props.className}>
                    <input type="text" defaultValue={this.state.displaytext} onBlur={this.save} autoFocus={true} onKeyDown={this.handleEnter}/>
                </div>
            );
        }
    };
}
export default editablefield;