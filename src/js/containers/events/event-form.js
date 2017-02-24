import EventForm from '../../components/events/event-form';
import {connect} from 'react-redux';
import {
  createEvent
} from '../../actions/events';

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
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(EventForm);
