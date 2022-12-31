import React from 'react';

class uneditableheader extends React.Component {
    render() {
        return (
            <div className="uedit">
                <p><b>&#183;</b>   {this.props.text}</p>
            </div>
        );
    }
}

export default uneditableheader;