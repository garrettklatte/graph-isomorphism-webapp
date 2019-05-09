import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

import './index.css';
import AppContainer from './containers/AppContainer';
import graphIsomorphism from './reducers';
import {fetchEasyGraph} from './services';

const store = createStore(graphIsomorphism);

fetchEasyGraph(store.dispatch)();

render(
  <Provider store={store}>
    <AppContainer />
  </Provider>,
  document.getElementById('root')
);
