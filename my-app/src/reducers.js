import { combineReducers } from 'redux'

import { EASY, SET_GRAPH, SET_POSITION, SET_SCALE } from './actions'


export const vertices = (state = [], action) => {
  switch (action.type) {
  case SET_GRAPH:
    return action.vertices
  default:
    return state
  }
}

export const source = (state = {}, action) => {
  switch (action.type) {
  case SET_GRAPH:
    return action.source
  case SET_POSITION: {
    const { vertex, x, y } = action
    return {
      ...state,
      [vertex]: {
	x,
	y
      }
    }
  }
  default:
    return state
  }
}

export const target = (state = {}, action) => {
  switch (action.type) {
  case SET_GRAPH:
    return action.target
  default:
    return state
  }
}

const edges = (state = [], action) => {
  switch (action.type) {
  case SET_GRAPH:
    return action.edges
  default:
    return state
  }
}

const scale = (state = 1, action) => {
  switch (action.type) {
  case SET_SCALE:
    return action.scale
  default:
    return state
  }
}

const difficulty = (state = EASY, action) => {
  switch (action.type) {
  case SET_GRAPH:
    return action.difficulty
  default:
    return state
  }
}

const graphIsomorphism = combineReducers({
  vertices,
  source,
  target,
  edges,
  scale,
  difficulty
})

export default graphIsomorphism
