import React from 'react';
import EventList from '../containers/events/event-list.js';
import Header from '../containers/header.js'
require('../../scss/style.scss');

const App = () => (
  <div className="container">
    <Header />
    <EventList />
  </div>
);

export default App;
