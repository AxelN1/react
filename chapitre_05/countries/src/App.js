import logo from './logo.svg';
import './App.css';
import React from 'react';
import Button from './components/Button';

class App extends React.Component {

  constructor() {
    super();
    this.state = {
      name: "",
      capital: "",
      flag: "",
      population: "",
      region: ""
  };
  }

  componentDidMount() {
    fetch("https://restcountries.eu/rest/v2/name/france")
    .then(response => response.json())
    // .then(result => console.log(result))
    // .then(name => console.log(name))
    .then(result => {
      this.setState({
            name : result
        //     capital : "paris"})
        }
    })
      
    //   {
    //   this.setState({
    //     name : result.name,
    //     capital : "paris"})
    // }
    
  }
  // componentDidMount()

  render() {
  
    return (
      <div className="App">
        {this.state.name}
        {this.state.capital}
        {this.state.flag}
        {this.state.population}
        {this.state.region}
        <h1>Hello</h1>
        <Button />
    </div>
  );
}

}
export default App;
