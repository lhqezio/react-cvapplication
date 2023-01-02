import React, { Component } from "react";
class Addclearbuttons extends Component {
    constructor(props){
        super(props);
        this.state = {
            isEmpty: null,
            addmode: null,
        };
    };
    componentDidMount(){
        this.setState({isEmpty: this.props.isEmpty});
        this.setState({addmode: this.props.addmode});
    }
    componentDidUpdate(prevProps){
        if(prevProps.isEmpty !== this.props.isEmpty){
            this.setState({isEmpty: this.props.isEmpty});
        }
        if(prevProps.addmode !== this.props.addmode){
            this.setState({addmode: this.props.addmode});
        }
    }
  render() {
    return (
      <div id={"edu-buttons"}>
        <button id={"add-button"} onClick={this.props.add}>{this.state.addmode ? "Cancel":"Add"}</button>
        {
            this.state.isEmpty ? null : <button id={"clear-button"} onClick={this.props.clear}>Clear</button>
            
        }
      </div>
    );
  }
}

export default Addclearbuttons;