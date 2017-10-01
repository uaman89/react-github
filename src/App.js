import React, {Component} from 'react';

import {Route, Link} from 'react-router-dom'

import List from './components/list'
import User from "./components/user";

import logo from './logo.svg';
import './App.css';

class App extends Component {
    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo"/>
                    <h1 className="App-title">Welcome to React</h1>
                </header>
                <nav className="App-intro">
                    <Link to="/list">Home</Link>
                </nav>
                <Route path="/list" render={props => <List {...props} />}/>
                <Route path="/user/:userName" render={props => <User {...props} />}/>
            </div>
        );
    }
}

export default App;