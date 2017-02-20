import React from 'react';
import EventList from '../containers/event-list';
require('../../scss/style.scss');

const App = () => (
  <div className="container">
    <h1 className="page-header well">React Application</h1>
    <EventList />
  </div>
);

export default App;
