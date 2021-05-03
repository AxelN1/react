// import React, { items } from 'react'
import React from 'react';
import Card from '../components/Card';


class Pay extends React.Component {

    constructor() {
        super();
        this.state = {
            basket: "",
            total: 0,
            totalTVA: 0,
            totalEcoTax: 0,
            totalTTC: 0
        }
    }

    handleSelect(name, price) {
        console.log(name, price);
    }

    render() {
        return (
            <div>
                <p>{this.state.total}</p>

                    {this.props.productName}
                    {this.props.price}
                    {this.props.onClick}

                    {/* <Card productName= "croissant" /> */}
                    
                <div>
                    {items.map((item) =>
                        <Card 
                            name={this.props.productName}
                            price={this.props.price}
                            click={this.handleSelect}
                            />
                    )}
                </div>


                
            </div>

        )
    }
}

export default Pay;