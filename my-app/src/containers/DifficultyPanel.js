import { connect } from 'react-redux';

import { EASY, MEDIUM, HARD } from '../actions';
import Navigation from '../components/Navigation';
import fetchGraph from '../services';

const mapStateToProps = (state) => {
  const { difficulty, uri } = state;
  return {
    difficulty,
    uri,
  };
};

const mapDispatchToProps = dispatch => ({
  onEasy: fetchGraph(dispatch, EASY),
  onMedium: fetchGraph(dispatch, MEDIUM),
  onHard: fetchGraph(dispatch, HARD),
});

const DifficultyPanel = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Navigation);

export default DifficultyPanel;
