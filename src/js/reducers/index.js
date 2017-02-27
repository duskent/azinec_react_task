import {combineReducers} from 'redux';
import EventReducer from './reducer-events';
import HeaderReducer from './reducer-header';
import {reducer as formReducer} from 'redux-form';

const allReducers = combineReducers({
  events: EventReducer,
  admin: HeaderReducer,
  form: formReducer
});

export default allReducers;
