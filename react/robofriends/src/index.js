import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import 'tachyons';
import reportWebVitals from './reportWebVitals';
import App from './containers/App';

import {createLogger} from 'redux-logger';
import {Provider, connect} from 'react-redux';

import {createStore, applyMiddleware, combineReducers} from 'redux'

import {searchRobots, requestRobots} from './reducers'

import thunk from 'redux-thunk'

const logger = createLogger(); // middle ware 

const rootReducer = combineReducers({searchRobots, requestRobots})

const store = createStore(rootReducer, applyMiddleware(thunk, logger));



ReactDOM.render(
  <Provider store={store}>
    <App>
    </App>
  </Provider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
