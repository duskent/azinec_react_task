import React, {Component} from 'react';
import Event from './event';

class EventDetail extends Event {
  componentWillMount() {
    this.props.fetchEvent(this.props.routeParams.id);
  }

  render() {
    const { event } = this.props.activeEvent
    return (
      <div className='container'>
        <div className='row'>
          <h2 className="text-center col-md-8 col-md-offset-2 col-sm-8 col-sm-offset-2 event-detail-header">
            {event.title}
          </h2>
        </div>
        <div className='row'>
          <h3>
            <small className="text-center col-md-8 col-md-offset-2 col-sm-8 col-sm-offset-2 event-detail-date">
              <b>Starts:</b> {this.displayTime(event.startTime)} / <b>Ends:</b> {this.displayTime(event.endTime)}
            </small>
          </h3>
        </div>
        <div className='row'>
          <h3>
            <small className="text-center col-md-8 col-md-offset-2 col-sm-8 col-sm-offset-2 event-detail-date">
              {this.displayStatus(event.status)}
            </small>
          </h3>
        </div>
        <div className='row'>
          {this.displayImage(event, "col-md-8 col-md-offset-2 well event-detail-image col-sm-8 col-sm-offset-2 hidden-xs")}
        </div>
        <div className='row'>
          <p className="text-justify event-detail-content col-md-10 col-md-offset-1 col-sm-8 col-sm-offset-2">
            {event.description}
          </p>
        </div>
      </div>
    );
  }
}

export default EventDetail;
