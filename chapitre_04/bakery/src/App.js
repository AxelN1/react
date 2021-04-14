import React from 'react';
// import Button from "./components/Button.jsx"
import 'bootstrap/dist/css/bootstrap.min.css';


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

      <h1>Bakery</h1>
    )
}

}

export default App