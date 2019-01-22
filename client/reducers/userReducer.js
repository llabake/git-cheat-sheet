import initialState from './initialState';
import * as types from '../actions/actionTypes';

const userReducer = (state = initialState.user, action) => {
  switch (action.type) {
    case types.AUTH:
      return { user: action.token };
    default:
      return state;
  }
};

export default userReducer;
