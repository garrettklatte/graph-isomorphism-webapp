import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

import './index.css';
import App from './components/App';
import graphIsomorphism from './reducers';

const store = createStore(graphIsomorphism);

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
