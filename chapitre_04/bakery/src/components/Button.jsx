import React from 'react';


class Button extends React.Component {
    
    render() {
        return (
            <button
                className={this.props.isSelected ?  "btn btn-primary" : "btn btn-light"}
                onClick={this.props.onClick} 
                type="button">
                    {this.props.children}
            </button>
        )
    }
}

export default Button