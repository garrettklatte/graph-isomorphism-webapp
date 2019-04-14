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
    return (
      <div className="App">
        <header className="App-header">
          <Graph nodes={this.state.nodes} edges={this.state.edges}/>
          <Graph nodes={this.state.nodes} edges={this.state.edges}/>
        </header>
      </div>
    );
  }
}

export default App;
