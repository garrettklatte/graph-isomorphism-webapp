import {MEDIUM, setGraph, setPosition, setScale, SET_GRAPH, SET_POSITION, SET_SCALE} from '../actions'

describe('actions', () => {
  it('creates SET_GRAPH action', () => {
    // Given
    const vertices = ["A", "B"]
    const source = {A: {x: 10, y: 20}, B: {x: 30, y: 50}}
    const target = {A: {x: 50, y: 30}, B: {x: 70, y: 90}}
    const edges = [{start: "A", end: "B"}]
    const difficulty = MEDIUM

    // When
    const action = setGraph(vertices, source, target, edges, difficulty)

    // Then
    expect(action).toStrictEqual(
      {
	type: SET_GRAPH,
	vertices: ["A", "B"],
	source: {A: {x: 10, y: 20}, B: {x: 30, y: 50}},
	target: {A: {x: 50, y: 30}, B: {x: 70, y: 90}},
	edges: [{start: "A", end: "B"}],
	difficulty: MEDIUM
      }
    )
  })

  it('creates SET_POSITION action', () => {
    // Given
    const vertex = "B"
    const x = 45
    const y = 55

    // When
    const action = setPosition(vertex, x, y)

    // Then
    expect(action).toStrictEqual(
      {
	type: SET_POSITION,
	vertex: "B",
	x: 45,
	y: 55
      }
    )
  })

  it('creates SET_SCALE action', () => {
    // Given
    const scale = 5

    // When
    const action = setScale(scale)

    // Then
    expect(action).toStrictEqual(
      {
	type: SET_SCALE,
	scale: 5
      }
    )
  })
})
