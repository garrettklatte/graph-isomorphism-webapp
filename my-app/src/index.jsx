import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

import './index.css';
import { EASY } from './actions';
import App from './components/App';
import graphIsomorphism from './reducers';
import { fetchGraph } from './services';

const store = createStore(graphIsomorphism);

fetchGraph(store.dispatch, EASY)(0)();

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root'),
);
