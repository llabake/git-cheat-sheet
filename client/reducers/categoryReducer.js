import initialState from './initialState';
import * as types from '../actions/actionTypes';

const categoryReducer = (state = initialState.categories, action) => {
  switch (action.type) {
    case types.CATEGORIES:
      return action.data;
    default:
      return state;
  }
};

export default categoryReducer;
