import React, { Component } from 'react';

import {
    Route,
    Link
} from 'react-router-dom'

import logo from './logo.svg';
import './App.css';
import Users from "./containers/users";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <nav className="App-intro">
          <Link to="/list">Home</Link>
        </nav>
          <Users/>
      </div>
    );
  }
}

export default App;
