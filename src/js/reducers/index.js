import {combineReducers} from 'redux';
import EventReducer from './reducer-events';
import HeaderReducer from './reducer-header';

const allReducers = combineReducers({
  events: EventReducer,
  admin: HeaderReducer
});

export default allReducers;
