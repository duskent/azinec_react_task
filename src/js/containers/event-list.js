import EventList from '../components/event-list.js';
import {connect} from 'react-redux';
import {fetchEvents, fetchEventsSuccess, fetchEventsFailure} from '../actions/events.js'

const mapStateToProps = (state) => {
  return {
    eventsList: state.events.eventsList
  };
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchEvents: () => {
      dispatch(fetchEvents()).then((response) => {
        !response.error ? dispatch(fetchEventsSuccess(response.payload.data)) :
          dispatch(fetchEventsFailure(response.payload.data));
      });
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(EventList);
