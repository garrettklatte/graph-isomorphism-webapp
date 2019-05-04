import React from 'react';

import '../styles/Graph.css';

const StaticGraph = ({vertices, verticesById, edges, radius}) => (
  <svg viewBox="0 0 100 100">
    {edges.map(edge => {
      const {start, end} = edge;
      const startVertex = verticesById[start];
      const endVertex = verticesById[end];
      const key = start + end;
      return (
        <line x1={startVertex.x}
              y1={startVertex.y}
              x2={endVertex.x}
              y2={endVertex.y}
              className="Line"
              key={key}
        />
      );
    })}
    {vertices.map(vertex => (
      <circle cx={verticesById[vertex].x}
              cy={verticesById[vertex].y}
              r={radius}
              key={vertex}
              className="Circle"
      />
    ))}
  </svg>
);

export default StaticGraph;
