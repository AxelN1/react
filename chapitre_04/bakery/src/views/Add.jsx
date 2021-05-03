import React from 'react';


class Add extends React.Component {

    constructor() {
        super()
        this.state = {
            productName: "",
            price: 1
        }

        this.updateProductName = this.updateProductName.bind(this)
        this.updatePrice = this.updatePrice.bind(this)
        this.sendItemToApp = this.sendItemToApp.bind(this)
    }

    updateProductName(e) {
        // console.log("Rentre dans productName", e.target.value)

        this.setState({
            productName: e.target.value
        })
    }

    updatePrice(e) {
        // console.log("Rentre dans productName", e.target.value)

        this.setState({
            price: e.target.value
        })
    }

    sendItemToApp() {
        // console.log("Send item to app");
        this.props.addItem(this.state.productName, this.state.price)
    }
    
    render() {
        return (
           <div>
               <input type="text" onChange={this.updateProductName}/>

               <input type="range" value={this.state.price} min="1" max="10" onChange={this.updatePrice}/>

               <button className="btn btn-primary" onClick={this.sendItemToApp}>Add</button>
           </div>
        )
    }
}
export default Add;