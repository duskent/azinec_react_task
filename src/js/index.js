import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import promise from 'redux-promise';
import createLogger from 'redux-logger';
// REDUCERS
import allReducers from './reducers/';
import App from './components/app';
import EventList from './containers/events/event-list';
import EventDetail from './containers/events/event-detail';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';

const logger = createLogger();
const store = createStore(
  allReducers,
  applyMiddleware(thunk, promise, logger)
);

ReactDOM.render(
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route path='/' component={App}>
        <IndexRoute component={EventList} />
        <Route path='events' component={EventList} />
        <Route path='events/:id' component={EventDetail}/>
      </Route>
    </Router>
  </Provider>,
  document.getElementById('root')
);
