import {
  SIGN_IN,
  SIGN_OUT
} from '../actions/header';
// Initial State
const INITIAL_STATE = { admin: false };
// Exported func
export default function (state = INITIAL_STATE, action) {
  let error;
  switch (action.type) {
    case SIGN_IN:
      return { ...state, admin: true }
    case SIGN_OUT:
      return { ...state, admin: false }
    default:
      return state;
  }
}
