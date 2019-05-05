import request from 'superagent';
import {setGraph} from './actions';

export const fetchEasyGraph = dispatch => () => {
  request
    .get('https://k7l6xg25h0.execute-api.us-east-1.amazonaws.com/test/graphs/easy/1')
    .then(res => {
      const {vertices, source, target, edges} = res.body
      dispatch(setGraph(vertices, source, target, edges))
    })
    .catch(err => {
      console.log("error:", err)
    });
}
