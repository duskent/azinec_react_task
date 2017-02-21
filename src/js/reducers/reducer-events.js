import {
  FETCH_EVENTS,
  FETCH_EVENTS_SUCCESS,
  FETCH_EVENTS_FAILURE,
  DELETE_EVENT,
  DELETE_EVENT_SUCCESS,
  DELETE_EVENT_FAILURE
} from '../actions/events';

const INITIAL_STATE = { eventsList: { events: [], error: null, loading: false },
                        deleteEvent: { event: null, error: null, loading: null }};

export default function (state = INITIAL_STATE, action) {
  let error;
  switch (action.type) {
    case FETCH_EVENTS:
      return { ...state, eventsList: { events: [], error: null, loading: true } }
    case FETCH_EVENTS_SUCCESS:
      return { ...state, eventsList: { events: action.payload, error: null, loading: false }};
    case FETCH_EVENTS_FAILURE:
      error = action.payload || { message: action.payload.message };
      return { ...state, eventsList: { events: [], error: error, loading: false }};
    case DELETE_EVENT:
      let deleteEventArray = state.eventsList.events.filter(function (event) {
        return event._id !== action.payload._id;
      });
      return { ...state, eventsList: { events: deleteEventArray, error: null, loading: true }};
    case DELETE_EVENT_SUCCESS:
      let newArray = state.eventsList.events.filter(function (event) {
        return event._id !== action.payload._id;
      });
      return { ...state, eventsList: { events: newArray, error: null, loading: false }};
    case DELETE_EVENT_FAILURE:
      error = action.payload || { message: action.payload.message };
      return { ...state, eventsList: { events: state.eventsList.events, error: error, loading: false }};
    default:
      return state;
  }
}
