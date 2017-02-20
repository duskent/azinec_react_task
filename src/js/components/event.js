import React, {Component} from 'react';

class Event extends Component {
  render() {
    let currentEvent = this.props.data;
    return (
      <div className="col-sm-6 col-md-4">
        <div className="thumbnail">
          <img src={currentEvent.image} alt={currentEvent.title} />
          <div className="caption">
            <h3>{currentEvent.title}</h3>
            <p>Starting: {currentEvent.startTime.toString()}</p>
            <p>Ends: {currentEvent.endTime.toString()}</p>
            <p>remaining Seats: {currentEvent.remainingSeats}</p>
            <p>
              <a href="#" className="btn btn-primary btn-group-justified" role="button">Button</a>
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default Event;
