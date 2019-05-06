import { connect } from 'react-redux';

import Navigation from '../components/Navigation'
import {fetchEasyGraph, fetchMediumGraph, fetchHardGraph} from '../services'

const mapStateToProps = state => {
  const {difficulty} = state
  return {
    difficulty
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onEasy: fetchEasyGraph(dispatch),
    onMedium: fetchMediumGraph(dispatch),
    onHard: fetchHardGraph(dispatch),
  }
}

const DifficultyPanel = connect(
  mapStateToProps,
  mapDispatchToProps
)(Navigation)

export default DifficultyPanel
