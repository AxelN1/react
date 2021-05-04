import logo from './logo.svg';
import './App.css';
import React from "react";
import { BrowserRouter, Route, Link, Switch } from "react-router-dom";
import Movies from "./components/Movie.jsx";

class App extends React.Component {

  render() {
    return (
      <BrowserRouter>
        <div>
          <nav>
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/movie">Movies</Link></li>
            </ul>
          </nav>

          <Switch>
            <Route exact path="/" component={Home}/>
						<Route path="/movie" component={Movie}/>
						<Route path="*" component={Error404}/>
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}
export default App;
