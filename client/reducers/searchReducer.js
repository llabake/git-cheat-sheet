import initialState from './initialState';
import * as types from '../actions/actionTypes';

const searchReducer = (state = initialState.searchResults, action) => {
  switch (action.type) {
    case types.SEARCH_RESULTS:
      return action.data;
    default:
      return state;
  }
};

export default searchReducer;
