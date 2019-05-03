import React from 'react';
import Draggable from 'react-draggable';

const Graph = ({vertices, verticesById, edges, radius, onDrag, onStop}) => (
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
              style={{stroke: "white",
                      strokeWidth: 0.5}}
              key={key}
        />
      );
    })}
    {vertices.map(vertex => (
      <Draggable onDrag={onDrag(vertex)}
                 onStop={onStop()}
                 key={vertex}
                 scale={3}>
        <circle cx={verticesById[vertex].x}
                cy={verticesById[vertex].y}
                r={radius}
                style={{stroke: "white", fill: "white"}}/>
      </Draggable>
    ))}
  </svg>
);

export default Graph;
