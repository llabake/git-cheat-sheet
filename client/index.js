import React from 'react';
import { render } from 'react-dom';
import { Provider } from "react-redux";

import './index.css';
import App from "./components/App";
import store from "./store/configureStore";
import { fetchCategories } from "./actions/categoryAction";

store.dispatch(fetchCategories());

render(
  <Provider store={store}>
    <App />
  </Provider>, document.getElementById('app'),
);
