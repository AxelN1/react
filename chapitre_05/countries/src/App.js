import logo from './logo.svg';
import './App.css';
import React from 'react';
import Button from './components/Button';
import Bootstrap from 'bootstrap/dist/css/bootstrap.min.css';

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
      .then((response) => response.json())
      .then((result) => {
        var flg = result.map((elem) => {
          return elem.flag;
        });
        this.setState({
          countryFlag: flg,
        });

        var countries = result.map((elem) => {
          return elem.name;
        });
        this.setState({
          countryName: countries,
        });

        var capit = result.map((elem) => {
          return elem.capital;
        });
        this.setState({
          capitalCity: capit,
        });

        var rgn = result.map((elem) => {
          return elem.region;
        });
        this.setState({
          regionName: rgn,
        });

        var popul = result.map((elem) => {
          return elem.population;
        });
        this.setState({
          populationCountry: popul,
        });
      });
  }




  render() {

    var { activeTab, items } = this.state;


    return (
      <div>
        <Button
          isSelected={activeTab === "france"}
          onClick={(e) => this.onClick("france")}
        >
          France
        </Button>
        <Button
          isSelected={activeTab === "brazil"}
          onClick={(e) => this.onClick("brazil")}
        >
          Brazil
        </Button>
        <Button
          isSelected={activeTab === "croatia"}
          onClick={(e) => this.onClick("croatia")}
        >
          Croatia
        </Button>

        <div>Flag: {this.state.countryFlag}</div>
        <div>Country: {this.state.countryName}</div>
        <div>Capital: {this.state.capitalCity}</div>
        <div>Region: {this.state.regionName}</div>
        <div>Population: {this.state.populationCountry}</div>
        <h1>Holà</h1>
      </div>
    );
  }

}
export default App;
