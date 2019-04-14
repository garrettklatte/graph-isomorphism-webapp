import React, { Component } from 'react';
import './App.css';
import {Graph} from './Graph';

class App extends Component {
  constructor(props) {
    super(props);

    const nodes = [
      {'val': 'A',
       'adjacents': ['B', 'C']
      },
      {'val': 'B',
       'adjacents': []
      },
      {'val': 'C',
       'adjacents': ['D']
      },
      {'val': 'D',
       'adjacents': []
      },
      {'val': 'E',
       'adjacents': ['A', 'B']
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

    this.state = {
      nodes: nodes.map(node => (
         {
           val: node.val,
           x: Math.random() * 1000,
           y: Math.random() * 500,
         })),
      edges,
      radius: 10,
    };
  }

  render() {
    const {nodes, edges} = this.state;
    return (
      <div className="App">
        <header className="App-header">
          <div>
            <Graph nodes={nodes} edges={edges}/>
            <Graph nodes={nodes} edges={edges}/>
          </div>
        </header>
      </div>
    );
  }
}

export default App;
