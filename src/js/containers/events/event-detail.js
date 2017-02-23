import EventDetail from '../../components/events/event-detail';
import {connect} from 'react-redux';
import {
  fetchEvent,
  fetchEventSuccess,
  fetchEventFailure
} from '../../actions/events';
require('../../../scss/event-detail.scss');

function mapStateToProps(state) {
  return {
    eventsList: state.events.eventsList,
    admin: state.admin,
    activeEvent: state.events.activeEvent
  };
}

function mapDispatchToProps(dispatch) {
  return {
    fetchEvent: (id) => {
      dispatch(fetchEvent(id))
        .then((result) => {
          if (result.payload.response && result.payload.response.status !== 200) {
            dispatch(fetchEventFailure(result.payload.response.data));
          } else {
            dispatch(fetchEventSuccess(result.payload.data))
          }
        })
      }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(EventDetail);
