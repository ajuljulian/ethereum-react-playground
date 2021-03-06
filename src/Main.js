import React, { Component } from "react";
import {
  Route,
  NavLink,
  HashRouter
} from "react-router-dom";
import Home from "./Home";
import Stuff from "./Stuff";
import Contact from "./Contact";
import NameGame from "./NameGame";
import TicTacToe from "./TicTacToe";

import "./Main.css"

class Main extends Component {
  render() {
    return (
        <HashRouter>
        <div>
          <h1>Playground for Ethereum Smart Contract Testing</h1>
          <ul className="header">
            <li><NavLink exact to="/">Home</NavLink></li>
            <li><NavLink to="/stuff">Stuff</NavLink></li>
            <li><NavLink to="/contact">Contact</NavLink></li>
            <li><NavLink to="/namegame">NameGame</NavLink></li>
            <li><NavLink to="/tictactoe">TicTacToe</NavLink></li>
          </ul>
          <div className="content">
            <Route exact path="/" component={Home}/>
            <Route path="/stuff" component={Stuff}/>
            <Route path="/contact" component={Contact}/>
            <Route path="/namegame" component={NameGame}/>
            <Route path="/tictactoe" component={TicTacToe}/>
          </div>
        </div>
        </HashRouter>
    );
  }
}
 
export default Main;