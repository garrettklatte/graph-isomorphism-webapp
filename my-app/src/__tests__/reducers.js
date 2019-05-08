import {source, target, vertices} from '../reducers'
import {SET_GRAPH} from '../actions'

const graph = {
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

describe('vertices reducer', () => {
  it('handles undefined action', () => {
    // Given
    const state = undefined
    const action = {}

    // When
    const newState = vertices(state, action)

    // Then
    expect(newState).toStrictEqual([])
  })

  it('handles SET_GRAPH action', () => {
    // Given
    const state = []
    const action = {
      ...graph,
      type: SET_GRAPH,
    }

    // When
    const newState = vertices(state, action)

    // Then
    expect(newState).toStrictEqual(graph.vertices)
  })
})

describe('source reducer', () => {
  it('handles undefined action', () => {
    // Given
    const state = undefined
    const action = {}

    // When
    const newState = source(state, action)

    // Then
    expect(newState).toStrictEqual({})
  })

  it('handles SET_GRAPH action', () => {
    // Given
    const state = {}
    const action = {
      ...graph,
      type: SET_GRAPH,
    }

    // When
    const newState = source(state, action)

    // Then
    expect(newState).toStrictEqual(graph.source)
  })
})

describe('target reducer', () => {
  it('handles undefined action', () => {
    // Given
    const state = undefined
    const action = {}

    // When
    const newState = target(state, action)

    // Then
    expect(newState).toStrictEqual({})
  })

  it('handles SET_GRAPH action', () => {
    // Given
    const state = {}
    const action = {
      ...graph,
      type: SET_GRAPH
    }

    // When
    const newState = target(state, action)

    // Then
    expect(newState).toStrictEqual(graph.target)
  })
})
