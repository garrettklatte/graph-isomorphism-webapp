import React from 'react';
import '../App.css';
import SourceGraph from '../containers/SourceGraph';
import TargetGraph from '../containers/TargetGraph';

const App = () => (
  <div className="App">
    <header className="App-header">
      <div className="Graph-Body">
        <TargetGraph />
        <SourceGraph />
      </div>
    </header>
  </div>
);

export default App;
