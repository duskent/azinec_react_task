import EventForm from '../../components/events/event-form';
import {connect} from 'react-redux';
import {
  createEvent,
  createEventSuccess,
  createEventFailure
} from '../../actions/events';
import {browserHistory} from 'react-router';

function mapStateToProps(state) {
  return {
    newEvent: state.events.newEvent,
    activeEvent: state.events.activeEvent
  };
}

function mapDispatchToProps(dispatch) {
  return {
    createEvent: (data) => {
      dispatch(createEvent(data));
    },
    onSubmit: (data) => {
      dispatch(createEvent(data)).then((response) => {
        if (!response.error) {
          var success = response.payload.data;
          dispatch(createEventSuccess(success));
          browserHistory.replace(`/events/${success._id}`);
        } else {
          dispatch(createEventFailure(response.payload.data));
        }
      });
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(EventForm);
