import React from 'react';
import ReactDOM from 'react-dom';

import {
    BrowserRouter as Router,
} from 'react-router-dom'

import {Provider} from 'react-redux'

import registerServiceWorker from './registerServiceWorker';

import './index.css';

import App from './App';
import configureStore from "./store/configureStore";
import {initialState} from "./redusers/index";

const store = configureStore(initialState);

ReactDOM.render(
    <Provider store={store}>
        <Router>
            <App/>
        </Router>
    </Provider>
    ,
    document.getElementById('root')
);

registerServiceWorker();
