import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
// Moddleware
import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import promise from 'redux-promise';
import createLogger from 'redux-logger';
// REDUCERS
import allReducers from './reducers/';
// Routes
import routes from './routes/index';
// Store
const logger = createLogger();
const store = createStore(
  allReducers,
  applyMiddleware(thunk, promise, logger)
);
// DOM render
ReactDOM.render(
  <Provider store={store}>
    {routes}
  </Provider>,
  document.getElementById('root')
);
