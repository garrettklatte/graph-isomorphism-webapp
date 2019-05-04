import React from 'react';
import '../App.css';
import SourceGraph from '../containers/SourceGraph';
import TargetGraph from '../containers/TargetGraph';

const App = () => (
  <div className="App">
    <div className="Container">
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
      </div>
    </div>
  </div>
);

export default App;
