import moxios from 'moxios';
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';

import { CATEGORIES, SEARCH_RESULTS } from "../../actions/actionTypes";
import { fetchCategories, searchCategory } from '../../actions/categoryAction';
import categoryMock from '../mocks/categoryMock';

const mockStore = configureStore([thunk]);

describe('Category Action', () => {
  beforeEach(() => moxios.install());
  afterEach(() => moxios.uninstall());

  it('should dispatch CATEGORIES', (done) => {
    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request.respondWith({
        status: 200,
        response: {
          message: `Categories retrieved successfully`,
          data: categoryMock.data,
        },
      });
    });
    const store = mockStore();
    const expectedActions = [
      {
        type: CATEGORIES,
        data: categoryMock.data,
      },
    ];
    store.dispatch(fetchCategories())
      .then(() => {
        expect(store.getActions()).toEqual(expectedActions);
        done();
      });
  });
  xit('should dispatch SEARCH_RESULTS', (done) => {
    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request.respondWith({
        status: 200,
        response: {
          data: categoryMock.data,
        },
      });
    });
    const store = mockStore({ categories: categoryMock.data });
    const expectedActions = [
      {
        type: SEARCH_RESULTS,
        data: categoryMock.data,
      },
    ];
    store.dispatch(searchCategory('install'))
      .then(() => {
        expect(store.getActions()).toEqual(expectedActions);
        done();
      });
  });
});