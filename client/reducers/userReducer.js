import initialState from './initialState';
import * as types from '../actions/actionTypes';
// JSON.parse(localStorage.getItem('token'))
const userReducer = (state = initialState.user, action) => {
  switch (action.type) {
    case types.AUTH:
      return action.token;
    case types.LOGOUT:
      return null;
    default:
      return state;
  }
};

export default userReducer;
