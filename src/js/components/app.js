import React from 'react';
import Event from '../containers/event';
require('../../scss/style.scss');

const App = () => (
  <div className="container">
    <h1 className="page-header well">React Application</h1>
    <div className="row">
      <Event />
      <Event />
      <Event />
      <Event />
      <Event />
    </div>
  </div>
);

export default App;
