import React from 'react';
import '../App.css';
import SourceGraph from '../containers/SourceGraph';
import TargetGraph from '../containers/TargetGraph';

const App = () => (
  <div className="App">
    <div className="Graph-Body">
      <TargetGraph />
      <SourceGraph />
    </div>
  </div>
);

export default App;
