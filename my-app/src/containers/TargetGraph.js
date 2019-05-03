import { connect } from 'react-redux'
import Graph from '../components/Graph'
import { setPosition } from '../actions'

const onDrag = vertex => data => {
  return setPosition(vertex, data.x, data.y)
}

const onStop = () => {}

const mapStateToProps = state => {
  return {
    vertices: state.vertices,
    verticesById: state.target,
    edges: state.edges,
    radius: 10,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onDrag,
    onStop
  }
}

const TargetGraph = connect(
  mapStateToProps,
  mapDispatchToProps
)(Graph)

export default TargetGraph
