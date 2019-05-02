import React, { Component } from 'react';
import Draggable from 'react-draggable';

const WIDTH = 400;
const HEIGHT = 400;

export class Graph extends Component {
  constructor(props) {
    super(props);
    const {edges, nodes} = props;
    this.state = {
      nodes: nodes.map(node => (
         {
           val: node.val,
           x: node.X,
           y: node.Y,
           sx: node.X,
           sy: node.Y,
         }
      )),
      edges,
      radius: 2.5,
    };
  }

  onDragHandler = val => (e, data) => {
    const {nodes} = this.state;
    const {x, y} = data;
    this.setState({
      nodes: nodes.map(node => {
        if (node.val !== val)
          return node;
        return {
          ...node,
          x: node.sx + x,
          y: node.sy + y,
        };
      })
    });
  }

  render() {
    const {edges, nodes, radius} = this.state;
    return (
      <svg viewBox="0 0 100 100">
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
                          strokeWidth: 0.5}}
                  key={key}
            />
          );
        })}
        {nodes.map(node => (
          <Draggable onDrag={this.onDragHandler(node.val)}
                     key={node.val}
                     scale={3}>
            <circle cx={node.sx} cy={node.sy} r={radius} style={{stroke: "white", fill: "white"}}/>
          </Draggable>
        ))}
        {/* {nodes.map(node => ( */}
        {/*   <text key={node.val} x={node.x} y={node.y} style={{fontSize: "5"}}> */}
        {/*     {node.val} */}
        {/*   </text> */}
        {/* ))} */}
      </svg>
    );
  }
}
