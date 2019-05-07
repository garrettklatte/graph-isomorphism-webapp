import request from 'superagent';
import uuidv4 from 'uuid/v4';

import {EASY, MEDIUM, HARD, setGraph} from './actions';

const translateVertices = (mapping, vertices) => (
  vertices.map(vertex => mapping[vertex])
)

const translatePosition = (mapping, vertices, source) => (
  vertices.reduce((accumulator, vertex) => (
    {
      ...accumulator,
      [mapping[vertex]]: source[vertex]
    }
  ), {})
)

const translateEdges = (mapping, edges) => (
  edges.map(edge => ({
    start: mapping[edge.start],
    end: mapping[edge.end],
  }))
)

const translate = ({vertices, source, target, edges}) => {
  const mapping = vertices.reduce((accumulator, vertex) => (
    {
      ...accumulator,
      [vertex]: uuidv4()
    }
  ), {})

  return {
    vertices: translateVertices(mapping, vertices),
    source: translatePosition(mapping, vertices, source),
    target: translatePosition(mapping, vertices, target),
    edges: translateEdges(mapping, edges)
  }
}

export const fetchEasyGraph = dispatch => () => {
  request
    .get('https://k7l6xg25h0.execute-api.us-east-1.amazonaws.com/test/graphs/easy/1')
    .then(res => {
      const {vertices, source, target, edges} = translate(res.body)
      dispatch(setGraph(vertices, source, target, edges, EASY))
    })
    .catch(err => {
      console.log("error:", err)
    });
}

export const fetchMediumGraph = dispatch => () => {
  request
    .get('https://k7l6xg25h0.execute-api.us-east-1.amazonaws.com/test/graphs/medium/1')
    .then(res => {
      const {vertices, source, target, edges} = translate(res.body)
      dispatch(setGraph(vertices, source, target, edges, MEDIUM))
    })
    .catch(err => {
      console.log("error:", err)
    });
}

export const fetchHardGraph = dispatch => () => {
  request
    .get('https://k7l6xg25h0.execute-api.us-east-1.amazonaws.com/test/graphs/hard/1')
    .then(res => {
      const {vertices, source, target, edges} = translate(res.body)
      dispatch(setGraph(vertices, source, target, edges, HARD))
    })
    .catch(err => {
      console.log("error:", err)
    });
}
