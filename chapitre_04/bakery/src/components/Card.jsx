import React from 'react';
import Button from './Button';

class Card extends React.Component {

    constructor() {
        super();
        this.state = {
            image: "../public/images/item.png"
        }
    }


    render() {
        return (
            <div>
                {this.props.productName}
                {this.props.price}
                {this.props.onClick}

                {/* <Button onClick={this.productName}></Button> */}
                <Button onClick={this.state.productName, this.props.price}></Button>
            </div>
        )
    }
}

export default Card