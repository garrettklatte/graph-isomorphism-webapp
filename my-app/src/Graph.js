import React, { Component } from 'react';
import Draggable from 'react-draggable';

const WIDTH = 1000;
const HEIGHT = 500;

export class Graph extends Component {
  constructor(props) {
    super(props);
    const {edges, nodes} = props;
    this.state = {
      nodes: nodes.map(node => (
         {
           val: node.val,
           x: Math.random() * WIDTH,
           y: Math.random() * HEIGHT,
         })),
      edges,
      radius: 10,
    };
  }

  onDragHandler = val => (e, data) => {
    const {nodes, radius} = this.state;
    const {x, y} = data;
    this.setState({
      nodes: nodes.map(node => {
        if (node.val !== val)
          return node;
        return {
          ...node,
          x: x - radius/2,
          y: y - radius/2,
        };
      })
    });
  }

  render() {
    const {edges, nodes, radius} = this.state;
    return (
      <svg width={WIDTH} height={HEIGHT}>
        {nodes.map(node => (
          <Draggable defaultPosition={{x: node.x, y: node.y}}
                     onDrag={this.onDragHandler(node.val)}
                     onStop={this.onDragHandler(node.val)}
                     key={node.val}>
            <circle r={radius} style={{stroke: "white", fill: "white"}}/>
          </Draggable>
        ))}
        {edges.map(edge => {
          const {start, end} = edge;
          const startNode = nodes.find(node => node.val === start);
          const endNode = nodes.find(node => node.val === end);
          const key = start + end;
          return (
            <line x1={startNode.x}
                  y1={startNode.y}
                  x2={endNode.x}
                  y2={endNode.y}
                  style={{stroke: "white",
                          strokeWidth: 2}}
                  key={key}
            />
          );
        })}
      </svg>
    );
  }
}

