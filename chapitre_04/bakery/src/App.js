import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from './components/Button.jsx';
// import Add from './components/Add.jsx';
// import List from './components/List.jsx';
// import Pay from './components/Pay.jsx';


class App extends React.Component {

  constructor() {
      super()

      this.state = {
        activeTab : children,
        items : [] 
      }

  }

  selectAdd(children) {
    this.setState = {
      activeTab: "add",
    };
  }

  selectPay(children) {
    this.setState({
      activeTab: "pay",
    });
  }

  selectList(children) {
    this.setState({
      activeTab: 'list',
    });
  }


  
  render() {
    return (

      <div>

      <nav className="col">
          <p>
            <a href="./components/Add">Add</a>
          </p> 

          <p>
            <a href="./components/List">List</a>
            </p>
            <p>
            <a href="./components/Pay">Pay</a>
          </p>

        </nav>
          
          <Button
            isSelected={this.state.activeTab === "add"}
            onClick={this.onClickAdd}
          > Add </Button>


          < Button
            isSelected={this.state.activeTab === "list"}
            onClick={this.onClickList}
          > List </Button>

        < Button
            isSelected={this.state.activeTab === "pay"}
            onClick={this.onClickPay}
          > Pay </Button>

      <h1>Bakery</h1>

      </div>
    )
}

}

export default App