import { connect } from 'react-redux'

import Graph from '../components/Graph'
import { setPosition, setScale, updateDistance } from '../actions'

const onDrag = dispatch => vertex => (event, data) => {
  dispatch(setPosition(vertex, data.x, data.y))
}

const onMount = dispatch => scale => {
  dispatch(setScale(scale));
}

const onStop = dispatch => (vertices, source) => () => {
  dispatch(updateDistance(vertices, source))
}

const mapStateToProps = state => {
  return {
    vertices: state.vertices,
    verticesById: state.source,
    edges: state.edges,
    radius: 2.5,
    scale: state.scale,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onDrag: onDrag(dispatch),
    onMount: onMount(dispatch),
    onStop: onStop(dispatch)
  }
}

const SourceGraph = connect(
  mapStateToProps,
  mapDispatchToProps
)(Graph)

export default SourceGraph
