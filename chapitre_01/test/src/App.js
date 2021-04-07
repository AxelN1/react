import React from "react";
import './App.css';

const tempMin = -20;
const tempMax = 40;
const heartMin = 80;
const heartMax = 180;
const stepsMin = 0;
const stepsMax = 50000;

class App extends React.Component {
  render() {
    return (
      <div>
        <div className ="row">
          <p>Heart : {this.heartMin}</p>
          <p>Temperature : {this.tempMin}</p>
          <p>Steps : {stepsMin}</p>
        </div>
        <h1 className="text-primary">Hello !</h1>
      </div>
    );
  }
}

export default App;