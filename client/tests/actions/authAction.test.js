import moxios from 'moxios';
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';

import { AUTH } from "../../actions/actionTypes";
import { authUser } from '../../actions/authAction';
import authMock from '../mocks/authMock';

const mockStore = configureStore([thunk]);

describe('User Action', () => {
  beforeEach(() => moxios.install());
  afterEach(() => moxios.uninstall());

  it('should dispatch AUTH', (done) => {
    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request.respondWith({
        status: 201,
        response: {
          message: `Your Signup was successful Yahya`,
          data: authMock.data,
        },
      });
    });
    const store = mockStore();
    const expectedActions = [
      {
        type: AUTH,
        token: authMock.data.token,
      },
    ];
    store.dispatch(authUser())
      .then(() => {
        expect(store.getActions()).toEqual(expectedActions);
        done();
      });
  });
});