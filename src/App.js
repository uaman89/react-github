import React, {Component} from 'react';

import {Route, NavLink} from 'react-router-dom'

import List from './components/list'
import User from "./components/user";

import logo from './logo.svg';
import './App.css';

class App extends Component {
    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <div className="App-title">
                        <img src={logo} className="App-logo" alt="logo"/>
                        Welcome to React
                    </div>

                    <nav>
                        <NavLink activeClassName="active" to="/list">Home</NavLink>
                    </nav>
                </header>
                <Route path="/list" render={props => <List {...props} />}/>
                <Route path="/user/:userName" render={props => <User {...props} />}/>
            </div>
        );
    }
}

export default App;