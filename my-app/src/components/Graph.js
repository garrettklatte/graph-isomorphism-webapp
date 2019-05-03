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
                 defaultPosition={{x: verticesById[vertex].x,
                                   y: verticesById[vertex].y}}
                 key={vertex}
                 scale={3}>
        <circle r={radius}
                style={{stroke: "white", fill: "white"}}/>
      </Draggable>
    ))}
  </svg>
);

export default Graph;
