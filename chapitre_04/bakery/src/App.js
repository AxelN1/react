import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import Button from './components/Button.jsx';
import Add from './views/Add';
import List from './views/List';
import Pay from './views/Pay';
import Card from './components/Card.jsx';

class App extends React.Component {

  constructor() {
    super();
    this.state = {
      activeTab: 'add',
      items: []
    }
    this.selectAdd = this.selectAdd.bind(this)
    this.selectList = this.selectList.bind(this)
    this.selectPay = this.selectPay.bind(this)
    
    this.addItems = this.addItem.bind(this)
  }

  selectAdd() {
    this.setState({
      activeTab: "add"
    })
  }

  selectList() {
    this.setState({
      activeTab: "list"
    })
  }

  selectPay() {
    this.setState({
      activeTab: "pay"
    })
  }

  addItem(name, price) {
    
          const newItem = {
            name,
            // name: name
            price
            // price: price
          }
    this.setState({

      items: [...this.state.items, newItem]

    })
  }

  render() {
    console.log("In render: this.state.items", this.state.items);

    return (
      <div>
        <h1>Bakery</h1>

        <Button isSelected={this.state.activeTab === 'add'} onClick={this.selectAdd}>Add</Button>
        <Button isSelected={this.state.activeTab === 'list'} onClick={this.selectList}>List</Button>
        <Button isSelected={this.state.activeTab === 'pay'} onClick={this.selectPay}>Pay</Button>

        {this.state.activeTab === 'add' && <Add addItem={this.addItem}></Add>}
        {this.state.activeTab === 'list' && <List items={this.state.items}></List>}
        {this.state.activeTab === 'pay' && <Pay></Pay>}
        <Card/>
      </div>
    );
  }
}

export default App;