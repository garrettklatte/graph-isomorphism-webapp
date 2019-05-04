import { createStore } from 'redux'
import graphIsomorphism from './reducers'

const store = createStore(graphIsomorphism)

import { setPosition } from './actions'

console.log(store.getState())

const unsubscribe = store.subscribe(() => console.log(store.getState()))

store.dispatch(setPosition('A', 1, 13))
store.dispatch(setPosition('A', 1, 14))
store.dispatch(setPosition('A', 1, 15))

unsubscribe()
