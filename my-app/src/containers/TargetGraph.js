import { connect } from 'react-redux'
import StaticGraph from '../components/StaticGraph'

const mapStateToProps = state => {
  return {
    vertices: state.vertices,
    verticesById: state.target,
    edges: state.edges,
    radius: 2.5,
  }
}

const TargetGraph = connect(
  mapStateToProps,
  null
)(StaticGraph)

export default TargetGraph
