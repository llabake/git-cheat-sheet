import expect from 'expect';
import reducer from '../../reducers/searchReducer';
import * as types from '../../actions/actionTypes';
import initialState from '../../reducers/initialState';

import categoryMock from '../mocks/categoryMock';

describe('Search Reducer', () => {
  it('should return the initial state', () => {
    expect(reducer(undefined, {}))
      .toEqual(initialState.searchResults);
  });
  it('should search categories', () => {
    const search = {
      type: types.SEARCH_RESULTS,
      data: categoryMock.data,
    };
    expect(reducer([], search))
      .toEqual(categoryMock.data);
  });
});
