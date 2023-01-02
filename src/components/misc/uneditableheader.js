import React from 'react';

class uneditableheader extends React.Component {
    render() {
        return (
            <div className={this.props.className} id={this.props.id}>
                <p><b>&#183;</b>   {this.props.text}</p>
            </div>
        );
    }
}

export default uneditableheader;