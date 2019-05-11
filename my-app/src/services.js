import request from 'superagent';

import {EASY, MEDIUM, HARD, setGraph} from './actions';
import {translate} from './utils/translate'

const BASE = "https://rdj1cwv0s5.execute-api.us-east-1.amazonaws.com/dev/graphs"

export const fetchEasyGraph = dispatch => () => {
  request
    .get(BASE + '/easy/' + '2')
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
    .get(BASE + '/medium/' + '1')
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
    .get(BASE + '/hard/' + '1')
    .then(res => {
      const {vertices, source, target, edges} = translate(res.body)
      console.log(res.body)
      dispatch(setGraph(vertices, source, target, edges, HARD))
    })
    .catch(err => {
      console.log("error:", err)
    });
}
