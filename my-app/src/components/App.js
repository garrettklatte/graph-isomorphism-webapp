import React from 'react';
import '../styles/App.css';
import SourceGraph from '../containers/SourceGraph';
import TargetGraph from '../containers/TargetGraph';

const App = () => (
  <div className="App">
    <nav>
      <ul className="Nav">
        <li><p>Graph Isomorphism</p></li>
        <li><p>Easy</p></li>
        <li><p>Medium</p></li>
        <li><p>Hard</p></li>
      </ul>
    </nav>
    <div className="Graph-Body">
      <TargetGraph />
      <SourceGraph />
      <h2 className="Title">Target</h2>
      <h2 className="Title">Source</h2>
    </div>
  </div>
);

export default App;
