import { connect } from 'react-redux';

import Graph from '../components/Graph';
import { setPosition, setScale } from '../actions';

const onDrag = dispatch => vertex => (event, data) => {
  dispatch(setPosition(vertex, data.x, data.y));
};

const onMount = dispatch => (scale) => {
  dispatch(setScale(scale));
};

const onStop = () => {};

const mapStateToProps = state => ({
  vertices: state.vertices,
  verticesById: state.source,
  edges: state.edges,
  radius: 2.5,
  scale: state.scale,
});

const mapDispatchToProps = dispatch => ({
  onDrag: onDrag(dispatch),
  onMount: onMount(dispatch),
  onStop,
});

const SourceGraph = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Graph);

export default SourceGraph;
