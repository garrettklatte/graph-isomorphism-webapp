import React from 'react';

import '../styles/App.css';
import SourceGraph from '../containers/SourceGraph';
import TargetGraph from '../containers/TargetGraph';
import DifficultyPanel from '../containers/DifficultyPanel';

const App = ({done}) => (
  <div className="App">
    <DifficultyPanel />
    <div className="Graph-Body">
      <TargetGraph />
      <SourceGraph />
      <h2 className="Title">Target</h2>
      <h2 className="Title">Source</h2>
    </div>
  </div>
);

export default App;
