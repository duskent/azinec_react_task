import Event from '../../components/events/event';
import {connect} from 'react-redux';

function mapStateToProps(state) {
  return {
    events: state.events
  };
}

export default connect(mapStateToProps)(Event);
