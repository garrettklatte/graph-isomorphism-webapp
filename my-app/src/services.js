import request from 'superagent';

import {EASY, MEDIUM, HARD, setGraph} from './actions';
import {translate} from './utils/translate'

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
