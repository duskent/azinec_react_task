import React from 'react';
// Components (Pages)
import App from '../components/app';
import EventList from '../containers/events/event-list';
import EventDetail from '../containers/events/event-detail';
import EventForm from '../containers/events/event-form';
// React Router
import { Router, Route, IndexRoute, browserHistory } from 'react-router';

export default (
  <Router history={browserHistory}>
    <Route path='/' component={App}>
      <IndexRoute component={EventList} />
      <Route path='events' component={EventList} />
      <Route path='events/new' component={EventForm} />
      <Route path='events/:id' component={EventDetail}/>
      </Route>
  </Router>
);
