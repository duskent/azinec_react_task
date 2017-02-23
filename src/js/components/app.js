import React, {Component} from 'react';
import EventList from '../containers/events/event-list.js';
import Header from '../containers/header.js'
require('../../scss/style.scss');

class App extends Component {
  render() {
    return (
      <div className="container">
        <Header />
        {this.props.children}
      </div>
    );
  }
}

export default App;
