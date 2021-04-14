import React from "react";
import './App.css';
import Box from "./components/Box.jsx"
import global from "../src/styles/global.css"
// import "../src/styles/global.css"

const tempMin = -20;
const tempMax = 40;
const heartMin = 80;
const heartMax = 180;
const stepsMin = 0;
const stepsMax = 50000;

class App extends React.Component {

  constructor() {
    super()

    this.state = {
      water: 0,
      heart: 120,
      temperature: -10,
      steps: 3000
    }
  }

onHeartChange = (value) => {
  
  this.setState({
    // heart: value
    heart: this.state.heart
  })

  this.onHeartChange = this.onHeartChange.bind(this)
};


  render() {
    return (
      <div className="container-fluid">

        <div className="row">
          {/* <Box></Box> */}
          {/* <p>Heart : {heartMin}</p>
          <p>Temperature : {tempMin}</p>
          <p>Steps : {stepsMin}</p> */}
          <span></span>

          {/* Water */}
          <Box icon="local_drink" color="#3A85FF" value= {0} unit="L"/>
          
          {/* Steps */}
          <Box icon="directions_walk" color="black" value= {3000} unit="steps"/>
          
          {/* Heart */}
          <Box icon="favorite" color="red" value= {120} unit="bpm"/>
          
          {/* Temperature */}
          <Box icon="wb_sunny" color="yellow" value= {-10} unit="°C"/>

        </div>
        <h1 className="text-primary">Hello !</h1>
      </div>
    );
  }
}

export default App;