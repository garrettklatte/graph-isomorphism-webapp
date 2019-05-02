import React, { Component } from 'react';
import './App.css';
import {Graph} from './Graph';

const nodes = [
  {'val': 'A',
   'X': 10,
   'Y': 10,
  },
  {'val': 'B',
   'X': 35,
   'Y': 35,
  },
  {'val': 'C',
   'X': 10,
   'Y': 50,
  },
  {'val': 'D',
   'X': 10,
   'Y': 80,
  },
  {'val': 'E',
   'X': 90,
   'Y': 90,
  },
];

const edges = [
  {'start': 'A',
   'end': 'B'},
  {'start': 'A',
   'end': 'C'},
  {'start': 'C',
   'end': 'D'},
  {'start': 'E',
   'end': 'A'},
  {'start': 'E',
   'end': 'B'}
];


const nodesLeft = [
  {'val': 'A',
   'X': 10,
   'Y': 10.
  },
  {'val': 'B',
   'X': 90,
   'Y': 10,
  },
  {'val': 'C',
   'X': 10,
   'Y': 90,
  },
  {
    'val': 'D',
    'X': 90,
    'Y': 90,
  },
  {
    'val': 'E',
    'X': 40,
    'Y': 40,
  },
  {
    'val': 'F',
    'X': 60,
    'Y': 40,
  },
  {
    'val': 'G',
    'X': 40,
    'Y': 60,
  },
  {
    'val': 'H',
    'X': 60,
    'Y': 60,
  },
];

const edgesLeft = [
  {'start': 'A',
   'end': 'B',
  },
  {'start': 'B',
   'end': 'D',
  },
  {'start': 'A',
   'end': 'C'
  },
  {'start': 'C',
   'end': 'D'
  },
  {'start': 'A',
   'end': 'E',
  },
  {'start': 'E',
   'end': 'F',
  },
  {'start': 'E',
   'end': 'G'
  },
  {'start': 'G',
   'end': 'H'
  },
  {'start': 'C',
   'end': 'G',
  },
  {'start': 'B',
   'end': 'F',
  },
  {'start': 'F',
   'end': 'H'
  },
  {'start': 'H',
   'end': 'D'
  }
];

const nodesRight = [
  {'val': 'A',
   'X': 30,
   'Y': 10.
  },
  {'val': 'B',
   'X': 30,
   'Y': 36.67,
  },
  {'val': 'C',
   'X': 30,
   'Y': 63.33,
  },
  {
    'val': 'D',
    'X': 30,
    'Y': 90,
  },
  {
    'val': 'E',
    'X': 70,
    'Y': 10,
  },
  {
    'val': 'F',
    'X': 70,
    'Y': 36.67,
  },
  {
    'val': 'G',
    'X': 70,
    'Y': 63.33,
  },
  {
    'val': 'H',
    'X': 70,
    'Y': 90,
  },
];

const edgesRight = [
  {'start': 'A',
   'end': 'F',
  },
  {'start': 'A',
   'end': 'G',
  },
  {'start': 'A',
   'end': 'H'
  },
  {'start': 'B',
   'end': 'E'
  },
  {'start': 'B',
   'end': 'G',
  },
  {'start': 'B',
   'end': 'H',
  },
  {'start': 'C',
   'end': 'E'
  },
  {'start': 'C',
   'end': 'F'
  },
  {'start': 'C',
   'end': 'H',
  },
  {'start': 'D',
   'end': 'E',
  },
  {'start': 'D',
   'end': 'F'
  },
  {'start': 'D',
   'end': 'G'
  }
];

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <div className="Graph-Body">
            <Graph nodes={nodesLeft} edges={edgesLeft}/>
            <Graph nodes={nodesRight} edges={edgesRight}/>
          </div>
        </header>
      </div>
    );
  }
}

export default App;
