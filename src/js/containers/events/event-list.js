import EventList from '../../components/events/event-list';
import {connect} from 'react-redux';
import {
  fetchEvents,
  fetchEventsSuccess,
  fetchEventsFailure,
  deleteEvent,
  deleteEventSuccess,
  deleteEventFailure
} from '../../actions/events.js'

const mapStateToProps = (state) => {
  return {
    eventsList: state.events.eventsList,
    deletedEvent: state.events.deletedEvent
  };
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchEvents: () => {
      dispatch(fetchEvents()).then((response) => {
        !response.error ? dispatch(fetchEventsSuccess(response.payload.data)) :
          dispatch(fetchEventsFailure(response.payload.data));
      });
    },
    deleteEvent: (event) => {
      dispatch(deleteEvent(event._id)).then((response) => {
        !response.error ? dispatch(deleteEventSuccess(response.payload.data)) :
          dispatch(fetchEventsFailure(response.payload.data));
      });
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(EventList);
