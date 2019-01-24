import expect from 'expect';
import reducer from '../../reducers/userReducer';
import * as types from '../../actions/actionTypes';
import initialState from '../../reducers/initialState';

import authMock from "../mocks/authMock";

describe('User Reducer', () => {
  it('should return the initial state', () => {
    expect(reducer(undefined, {}))
      .toEqual(initialState.user);
  });
  it('should add a user', () => {
    const createUser = {
      type: types.AUTH,
      token: authMock.token,
    };
    expect(reducer([], createUser))
      .toEqual({ user: authMock.token });
  });
});