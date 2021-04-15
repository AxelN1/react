import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
// import Button from './components/Button.jsx';
// import Add from './components/Add.jsx';
// import List from './components/List.jsx';
// import Pay from './components/Pay.jsx';


class App extends React.Component {

  constructor() {
      super()

      this.state = {
        activeTab : "add",
        items : [] 
      }

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

      <h1>Bakery</h1>

      </div>
    )
}

}

export default App