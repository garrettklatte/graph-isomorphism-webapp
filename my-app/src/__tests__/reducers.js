import {
  difficulty,
  distanceSource,
  distanceTarget,
  edges,
  scale,
  source,
  target,
  vertices
} from '../reducers'
import {
  EASY,
  MEDIUM,
  SET_GRAPH,
  SET_POSITION,
  SET_SCALE,
  UPDATE_DISTANCE
} from '../actions'

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

  it('handles SET_POSITION action', () => {
    // Given
    const state = graph.source
    const action = {
      type: SET_POSITION,
      vertex: "B",
      x: 50,
      y: 50
    }
    const expectedState = {
      ...graph.source,
      "B": {
	x: 50,
	y: 50
      }
    }

    // When
    const newState = source(state, action)

    // Then
    expect(newState).toStrictEqual(expectedState)
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

describe('edges reducer', () => {
  it('handles undefined action', () => {
    // Given
    const state = undefined
    const action = {}

    // When
    const newState = edges(state, action)

    // Then
    expect(newState).toStrictEqual([])
  })

  it('handles SET_GRAPH action', () => {
    // Given
    const state = []
    const action = {
      ...graph,
      type: SET_GRAPH
    }

    // When
    const newState = edges(state, action)

    // Then
    expect(newState).toStrictEqual(graph.edges)
  })
})

describe('scale reducer', () => {
  it('handles undefined action', () => {
    // Given
    const state = undefined
    const action = {}

    // When
    const newState = scale(state, action)

    // Then
    expect(newState).toStrictEqual(1)
  })

  it('handles SET_SCALE action', () => {
    // Given
    const state = 1
    const action = {
      scale: 3.5,
      type: SET_SCALE
    }

    // When
    const newState = scale(state, action)

    // Then
    expect(newState).toBe(3.5)
  })
})

describe('difficulty reducer', () => {
  it('handles undefined action', () => {
    // Given
    const state = undefined
    const action = {}

    // When
    const newState = difficulty(state, action)

    // Then
    expect(newState).toBe(EASY)
  })

  it('handles SET_GRAPH action', () => {
    // Given
    const state = EASY
    const action = {
      type: SET_GRAPH,
      difficulty: MEDIUM
    }

    // When
    const newState = difficulty(state, action)

    // Then
    expect(newState).toBe(MEDIUM)
  })
})

describe('distanceSource reducer', () => {
  it('handles undefined action', () => {
    // Given
    const state = undefined
    const action = {}

    // When
    const newState = distanceSource(state, action)

    // Then
    expect(newState).toStrictEqual({})
  })

  it('handles SET_GRAPH action', () => {
    // Given
    const state = {}
    const action = {
      vertices: ["A", "B", "C"],
      source: {
	A: {
	  x: 10,
	  y: 10
	},
	B: {
	  x: 40,
	  y: 10
	},
	C: {
	  x: 40,
	  y: 50
	}
      },
      type: SET_GRAPH
    }

    // When
    const newState = distanceSource(state, action)

    // Then
    expect(newState).toStrictEqual(
      {
	A: {
	  A: 0,
	  B: 30,
	  C: 50
	},
	B: {
	  A: 30,
	  B: 0,
	  C: 40
	},
	C: {
	  A: 50,
	  B: 40,
	  C: 0
	}
      }
    )
  })

  it('handles UPDATE_DISTANCE action', () => {
    // Given
    const state = {}
    const action = {
      vertices: ["A", "B", "C"],
      source: {
	A: {
	  x: 10,
	  y: 10
	},
	B: {
	  x: 20,
	  y: 10
	},
	C: {
	  x: 20,
	  y: 20
	}
      },
      type: UPDATE_DISTANCE
    }

    // When
    const newState = distanceSource(state, action)

    // Then
    expect(newState).toStrictEqual(
      {
	A: {
	  A: 0,
	  B: 10,
	  C: 14.142135623730951,
	},
	B: {
	  A: 10,
	  B: 0,
	  C: 10
	},
	C: {
	  A: 14.142135623730951,
	  B: 10,
	  C: 0
	}
      }
    )
  })
})

describe('distanceTarget reducer', () => {
  it('handles undefined action', () => {
    // Given
    const state = undefined
    const action = {}

    // When
    const newState = distanceTarget(state, action)

    // Then
    expect(newState).toStrictEqual({})
  })

  it('handles SET_GRAPH action', () => {
    // Given
    const state = {}
    const action = {
      vertices: ["A", "B", "C"],
      target: {
	A: {
	  x: 10,
	  y: 10
	},
	B: {
	  x: 20,
	  y: 10
	},
	C: {
	  x: 20,
	  y: 20
	}
      },
      type: SET_GRAPH
    }

    // When
    const newState = distanceTarget(state, action)

    // Then
    expect(newState).toStrictEqual(
      {
	A: {
	  A: 0,
	  B: 10,
	  C: 14.142135623730951,
	},
	B: {
	  A: 10,
	  B: 0,
	  C: 10
	},
	C: {
	  A: 14.142135623730951,
	  B: 10,
	  C: 0
	}
      }
    )
  })
})
