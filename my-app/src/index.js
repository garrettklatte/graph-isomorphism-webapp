//import React from 'react';
//import ReactDOM from 'react-dom';
//import './index.css';
//import App from './App';
//import * as serviceWorker from './serviceWorker';
import { createStore } from 'redux'
import graphIsomorphism from './reducers'
import { setPosition } from './actions'

//ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
//serviceWorker.unregister();

const store = createStore(graphIsomorphism)



console.log(store.getState())

const unsubscribe = store.subscribe(() => console.log(store.getState()))

store.dispatch(setPosition('A', 1, 13))
store.dispatch(setPosition('A', 1, 14))
store.dispatch(setPosition('A', 1, 15))

unsubscribe()
