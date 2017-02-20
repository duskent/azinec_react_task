import React, {Component} from 'react';
import Event from '../components/event';

class EventList extends Component {
  renderEvents() {
    return (this.props.events.map(event => {
      return (<Event key={event.id} data={event}/>);
    }));
  }

  render() {
    return (
      <div className="row">
        {this.renderEvents()}
      </div>
    );
  }
}

export default EventList;
