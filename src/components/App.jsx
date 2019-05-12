import React from 'react';

import '../styles/App.css';
import SourceGraph from '../containers/SourceGraph';
import TargetGraph from '../containers/TargetGraph';
import DifficultyPanel from '../containers/DifficultyPanel';

const App = () => (
  <div className="App">
    <DifficultyPanel />
    <div className="Graph-Body">
      <TargetGraph />
      <SourceGraph />
      <h3 className="Title">Target</h3>
      <h3 className="Title">Source</h3>
    </div>
  </div>
);

export default App;
