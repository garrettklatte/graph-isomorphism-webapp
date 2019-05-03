import { SET_POSITION } from './actions'
import { combineReducers } from 'redux'

const initialState = {
  vertices: ['A', 'B', 'C', 'D'],
  source: {
    A: {
      x: 10,
      y: 10,
    },
    B: {
      x: 10,
      y: 90,
    },
    C: {
      x: 90,
      y: 10,
    },
    D: {
      x: 90,
      y: 90,
    }
  },
  target: {
    A: {
      x: 10,
      y: 10,
    },
    B: {
      x: 90,
      y: 10,
    },
    C: {
      x: 90,
      y: 90,
    },
    D: {
      x: 10,
      y: 90,
    }
  },
  edges: [
    {
      start: 'A',
      end: 'B',
    },
    {
      start: 'B',
      end: 'C',
    },
    {
      start: 'C',
      end: 'D',
    },
    {
      start: 'D',
      end: 'A',
    }
  ]
}

const vertices = (state = initialState.vertices, action) => {
  return state
}

const source = (state = initialState.source, action) => {
  switch (action.type) {
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

const target = (state = initialState.target, action) => {
  return state
}

const edges = (state = initialState.edges, action) => {
  return state
}

const graphIsomorphism = combineReducers({
  vertices,
  source,
  target,
  edges
})

export default graphIsomorphism
