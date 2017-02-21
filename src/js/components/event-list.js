import React, {Component} from 'react';
import Event from '../components/event';

class EventList extends Component {
  componentWillMount() {
    this.props.fetchEvents();
  }

  renderEvents(events) {
    return (events.map(event => {
      return (<Event key={event._id} data={event} deleteEvent={this.props.deleteEvent}/>);
    }));
  }

  render() {
    const { events, loading, error } = this.props.eventsList;
    if (loading) {
      console.log('loading');
    } else if (error) {
      console.log('error');
    }

    return (
      <div className="row">
        {this.renderEvents(events)}
      </div>
    );
  }
}

export default EventList;
