import React from "react";
 
class Button extends React.Component {
	
    isSelected  = () => {

    }

    onClick  = () => {
        
    }


    children = () => {
        
    }

    render() {
        return (
            
            <div>
                <h1>Button</h1>

                <button className = {this.props.isSelected} onClick = {this.props.onClick}></button>
                <button>{this.props.children}</button>
                

            </div>
        )
    }
}

export default Button