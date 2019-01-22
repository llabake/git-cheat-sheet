import { combineReducers } from 'redux';
// import ajaxCallsInProgress from "./ajaxStatusReducer";

import user from './userReducer';
import categories from './categoryReducer'
import search from './searchReducer'

const rootReducer = combineReducers({
  user,
  categories,
  search,
});

export default rootReducer;