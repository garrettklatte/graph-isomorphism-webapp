import {connect} from 'react-redux'

import App from '../components/App'
import {distance} from '../utils/distance'

const mapStateToProps = state => {
  const {distanceSource, distanceTarget, vertices} = state
  return {
    done: distance(distanceSource, distanceTarget, vertices, 10)
  }
}

const AppContainer = connect(
  mapStateToProps,
  null
)(App)

export default AppContainer
