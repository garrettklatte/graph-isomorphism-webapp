import React from 'react';

import '../styles/Navigation.css';

const Navigation = ({onEasy, onMedium, onHard}) => (
  <nav>
    <ul className="Nav">
      <li className="Nav-Left"><p>Graph Isomorphism</p></li>
      <li onClick={onEasy}><p>Easy</p></li>
      <li onClick={onMedium}><p>Medium</p></li>
      <li onClick={onHard}><p>Hard</p></li>
    </ul>
  </nav>
);

export default Navigation;
