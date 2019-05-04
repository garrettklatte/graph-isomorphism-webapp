// actions
export const SET_POSITION = 'SET_POSITION'
export const SET_SCALE = 'SET_SCALE'
export const SET_GRAPH = 'SET_GRAPH'

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

export const setGraph = (nodes, edges) => (
  {
    type: SET_GRAPH,
    nodes,
    edges
  }
)
