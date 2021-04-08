import React from "react";
import './App.css';
import Box from "./components/Box.jsx"
// import global from "../src/styles/global.css"
import "../src/styles/global.css"

const tempMin = -20;
const tempMax = 40;
const heartMin = 80;
const heartMax = 180;
const stepsMin = 0;
const stepsMax = 50000;

class App extends React.Component {
  render() {
    return (
      <div className="container-fluid">

        <div className="row">
          <Box></Box>
          <p>Heart : {heartMin}</p>
          <p>Temperature : {tempMin}</p>
          <p>Steps : {stepsMin}</p>
          <span></span>
          
        </div>
        <h1 className="text-primary">Hello !</h1>
      </div>
    );
  }
}

export default App;