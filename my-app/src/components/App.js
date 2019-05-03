import React from 'react';
import '../App.css';
import TargetGraph from '../containers/TargetGraph';

const App = () => (
  <div className="App">
    <header className="App-header">
      <div className="Graph-Body">
        <TargetGraph />
        <TargetGraph />
      </div>
    </header>
  </div>
);

export default App;
