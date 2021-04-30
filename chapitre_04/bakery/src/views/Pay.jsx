// import React, { items } from 'react'
import React from 'react';


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
            </div>
        )
    }
}

export default Pay