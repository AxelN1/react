import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import { BrowserRouter, Route, Link, Switch } from "react-router-dom";
import logo from './logo.svg';
import './App.css';
import Home from './views/Home';
import Weekly from './views/Weekly';
import WeeklyBattle from './views/WeeklyBattle';
import Popular from './views/Popular';
import PopularBattle from './views/PopularBattle';
import Favorites from './views/Favorites';
import Error404 from './views/Error404';

class App extends React.Component {

  
  render() {
  return (
    <BrowserRouter>
          <nav>
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/weekly">Weekly</Link></li>
              <li><Link to="/weekly-battle">Weekly-battle</Link></li>
              <li><Link to="/popular">Popular</Link></li>
              <li><Link to="/popular-battle">Popular-battle</Link></li>
              <li><Link to="/favorites">Favorites</Link></li>
            </ul>
          </nav>

          <Switch>
            <Route exact path="/" component={Home}/>
						<Route path="/weekly" component={Weekly}/>
            <Route path="/weekly-battle" component={WeeklyBattle}/>
            <Route path="/popular" component={Popular}/>
            <Route path="/popular-battle" component={PopularBattle}/>
            <Route path="/favorites" component={Favorites}/>
						<Route path="*" component={Error404}/>
          </Switch>

          {/* <Home />
          <Weekly />
          <WeeklyBattle />
          <Popular />
          <PopularBattle />
          <Favorites /> */}
          {/* <Error404 /> */}

      </BrowserRouter>
  );
}

}

export default App;
