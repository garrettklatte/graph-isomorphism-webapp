import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

import './index.css';
import App from './components/App';
import graphIsomorphism from './reducers';
import {fetchEasyGraph} from './services';

const store = createStore(graphIsomorphism);

fetchEasyGraph(store.dispatch)();

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
