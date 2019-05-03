import { connect } from 'react-redux'
import Graph from '../components/Graph'
import { setPosition } from '../actions'

const onDrag = dispatch => vertex => (event, data) => {
  dispatch(setPosition(vertex, data.x, data.y))
}

const onStop = () => {}

const mapStateToProps = state => {
  return {
    vertices: state.vertices,
    verticesById: state.source,
    edges: state.edges,
    radius: 2.5,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onDrag: onDrag(dispatch),
    onStop
  }
}

const SourceGraph = connect(
  mapStateToProps,
  mapDispatchToProps
)(Graph)

export default SourceGraph
