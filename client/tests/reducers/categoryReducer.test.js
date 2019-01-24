import expect from 'expect';
import reducer from '../../reducers/categoryReducer';
import * as types from '../../actions/actionTypes';
import initialState from '../../reducers/initialState';

import categoryMock from '../mocks/categoryMock';

describe('Category Reducer', () => {
  it('should return the initial state', () => {
    expect(reducer(undefined, {}))
      .toEqual(initialState.categories);
  });
  it('should fetch all categories', () => {
    const fetchCategories = {
      type: types.CATEGORIES,
      data: categoryMock.data,
    };
    expect(reducer([], fetchCategories))
      .toEqual(categoryMock.data);
  });
});