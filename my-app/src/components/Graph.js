import React from 'react';
import Draggable from 'react-draggable';

import '../styles/Graph.css';

class Graph extends React.Component {
  constructor(props) {
    super(props);
    this.props = props;
    this.svgRef = React.createRef();
  }

  componentDidMount() {
    if (this.svgRef === null) {
      return;
    }
    const {onMount} = this.props;
    const {clientWidth} = this.svgRef.current;
    const scale = clientWidth/100;
    onMount(scale);
  }

  render() {
    const {vertices, verticesById, edges, radius, scale, onDrag, onStop} = this.props;
    return (
      <svg ref={this.svgRef} viewBox="0 0 100 100">
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
          <Draggable onDrag={onDrag(vertex)}
                     onStop={onStop()}
                     defaultPosition={{x: verticesById[vertex].x,
                                       y: verticesById[vertex].y}}
                     key={vertex}
                     scale={scale}>
            <circle r={radius}
                    className="Circle"/>
          </Draggable>
        ))}
      </svg>
    );
  }
}

export default Graph;
