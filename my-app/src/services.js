import request from 'superagent';

import {setGraph} from './actions';
import {translate} from './utils/translate'

const BASE = "https://rdj1cwv0s5.execute-api.us-east-1.amazonaws.com/dev/graphs/"

export const fetchGraph = (dispatch, difficulty) => () => {
  request
    .get(BASE + difficulty.toLowerCase())
    .then(res => {
      const uris = res.body
      const uri = uris[Math.floor(Math.random() * uris.length)]

      request
	.get(BASE + difficulty.toLowerCase() + '/' + uri)
	.then(res => {
	  const {vertices, source, target, edges} = translate(res.body)
	  dispatch(setGraph(vertices, source, target, edges, difficulty))
	})
	.catch(err => {
	  console.log("error:", err)
	});
    })
    .catch(err => {
      console.log("error:", err)
    });
}
