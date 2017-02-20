import EventList from '../components/event-list.js';
import {connect} from 'react-redux';

function mapStateToProps(state) {
  return {
    events: state.events
  };
}

export default connect(mapStateToProps)(EventList);
