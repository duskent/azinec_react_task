import React, {Component} from 'react';
import {Link} from 'react-router';

class Event extends Component {
  renderDeleteButton(currentEvent) {
    if (this.props.admin.admin) {
      return (
        <button type="button" onClick={ () => this.props.deleteEvent(currentEvent) } className="btn btn-danger btn-group-justified" aria-label="Right Align">
          <span className="glyphicon glyphicon-remove" aria-hidden="true"></span>
        </button>
      );
    }
  }

  displayStatus(status) {
    switch (status) {
      case 'Open':
        return <p><b>Status:</b> <span className="label label-success">Open</span></p>;
        break;
      case 'Closed':
        return <p><b>Status:</b> <span className="label label-danger">Closed</span></p>;
        break;
      case 'Draft':
        return <p><b>Status:</b> <span className="label label-primary">Draft</span></p>;
        break;
      default:
        return <p><b>Status:</b> <span className="label label-default">Sold Out</span></p>;
    }
  }

  displayImage(currentEvent) {
    if (currentEvent.image) {
      return <img src={currentEvent.image} alt={currentEvent.title} />;
    } else {
      return <img src="https://www.allcloud.io/wp-content/uploads/2017/01/default-thumbnail.jpg" />
    }
  }

  displayTime(value) {
    let date = new Date(value);
    let displayedTime = `${date.getHours()}:${date.getMinutes()}`;
    let displayedDate = `${date.getDate()}.${date.getMonth()}.${date.getFullYear()}`;
    return `${displayedTime}, ${displayedDate}`;
  }

  displayShowLink(currentEvent) {
    if (currentEvent.status === 'Closed'){
      return (
        <p>
          <a href="#" className="btn btn-default btn-group-justified disabled" role="button">Closed</a>
        </p>
      );
    } else if (currentEvent.status === 'Sold out' || currentEvent.remainingSeats === 0) {
      return (
        <p>
          <a href="#" className="btn btn-default btn-group-justified disabled" role="button">Sold Out</a>
        </p>
      );
    } else {
      return (
        <p>
          <Link to={`/events/${currentEvent._id}`}
            className="btn btn-primary btn-group-justified" role="button">
            Register
          </Link>
        </p>
      );
    }
  }

  render() {
    let currentEvent = this.props.data;
    return (
      <div className="col-sm-6 col-md-4">
        <div className="thumbnail">
          {this.renderDeleteButton(currentEvent)}
          <Link to={`/events/${currentEvent._id}`}>
            {this.displayImage(currentEvent)}
          </Link>
          <div className="caption">
            <h3>{currentEvent.title}</h3>
            <p><b>Starting:</b> {this.displayTime(currentEvent.startTime)}</p>
            <p><b>Ends:</b> {this.displayTime(currentEvent.endTime)}</p>
            <p><b>Registration Limit</b>: {currentEvent.registrationLimit}</p>
            <p><b>Remaining Seats</b>: {currentEvent.remainingSeats}</p>
            {this.displayStatus(currentEvent.status)}
            {this.displayShowLink(currentEvent)}
          </div>
        </div>
      </div>
    );
  }
}

export default Event;
