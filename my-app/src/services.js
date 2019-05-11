import request from 'superagent';

import { setGraph } from './actions';
import { translate } from './utils/translate';

const BASE = 'https://rdj1cwv0s5.execute-api.us-east-1.amazonaws.com/dev/graphs/';

const fetchGraph = (dispatch, difficulty) => currentUri => () => {
  request
    .get(BASE + difficulty.toLowerCase())
    .then((outerRes) => {
      const uris = outerRes.body.reduce((acc, current) => {
        if (current === currentUri) {
          return acc;
        }
        return [...acc, current];
      }, []);
      const uri = uris[Math.floor(Math.random() * uris.length)];

      request
        .get(`${BASE + difficulty.toLowerCase()}/${uri}`)
        .then((innerRes) => {
          const {
            vertices, source, target, edges,
          } = translate(innerRes.body);
          dispatch(setGraph(vertices, source, target, edges, difficulty, uri));
        })
        .catch((err) => {
          console.log('error:', err);
        });
    })
    .catch((err) => {
      console.log('error:', err);
    });
};

export default fetchGraph;
