import Event from '../../components/events/event';
import {connect} from 'react-redux';

function mapStateToProps(state) {
  return {
    eventsList: state.events.eventsList,
    admin: state.admin,
    currentEvent: state.data
  };
}

export default connect(mapStateToProps)(Event);
