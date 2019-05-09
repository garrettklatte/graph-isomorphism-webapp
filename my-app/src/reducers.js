import { combineReducers } from 'redux'

import { EASY, SET_GRAPH, SET_POSITION, SET_SCALE, UPDATE_DISTANCE } from './actions'


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

export const edges = (state = [], action) => {
  switch (action.type) {
  case SET_GRAPH:
    return action.edges
  default:
    return state
  }
}

export const scale = (state = 1, action) => {
  switch (action.type) {
  case SET_SCALE:
    return action.scale
  default:
    return state
  }
}

export const difficulty = (state = EASY, action) => {
  switch (action.type) {
  case SET_GRAPH:
    return action.difficulty
  default:
    return state
  }
}

const distance = (outer, inner) => (
  Math.pow(Math.pow(outer.x - inner.x, 2) + Math.pow(outer.y - inner.y, 2), 0.5)
)

const distancePosition = (vertices, positions) => (
  vertices.reduce((acc, outer) => (
    {
      ...acc,
      [outer]: vertices.reduce((umm, inner) => (
	{
	  ...umm,
	  [inner]: distance(positions[outer], positions[inner])
	}
      ), {})
    }
  ), {})
)

export const distanceTarget = (state = {}, action) => {
  switch (action.type) {
  case SET_GRAPH: {
    const {vertices, target} = action
    return distancePosition(vertices, target)
  }
  default:
    return state
  }
}

export const distanceSource = (state = {}, action) => {
  switch (action.type) {
  case SET_GRAPH:
  case UPDATE_DISTANCE: {
    const {vertices, source} = action
    return distancePosition(vertices, source)
  }
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
  difficulty,
  distanceTarget,
  distanceSource
})

export default graphIsomorphism
