// actions
export const SET_POSITION = 'SET_POSITION'
export const SET_SCALE = 'SET_SCALE'
export const SET_GRAPH = 'SET_GRAPH'

// difficulties
export const EASY = 'EASY'
export const MEDIUM = 'MEDIUM'
export const HARD = 'HARD'

// action creators
export const setPosition = (vertex, x, y) => (
  {
    type: SET_POSITION,
    vertex,
    x,
    y
  }
)

export const setScale = scale => (
  {
    type: SET_SCALE,
    scale
  }
)

export const setGraph = (vertices, source, target, edges, difficulty) => (
  {
    type: SET_GRAPH,
    vertices,
    source,
    target,
    edges,
    difficulty
  }
)
