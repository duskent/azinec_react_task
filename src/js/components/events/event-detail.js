import React, {Component} from 'react';

class EventDetail extends Component {
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
              {event.startTime}
            </small>
          </h3>
        </div>
        <div className='row'>
          <img className="col-md-8 col-md-offset-2 well event-detail-image col-sm-8 col-sm-offset-2 hidden-xs"
            src={event.image} />
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
