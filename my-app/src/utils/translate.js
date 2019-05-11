import uuidv4 from 'uuid/v4';

export const translateVertices = (mapping, vertices) => (
  vertices.map(vertex => mapping[vertex])
);

export const translatePosition = (mapping, vertices, source) => (
  vertices.reduce((accumulator, vertex) => (
    {
      ...accumulator,
      [mapping[vertex]]: source[vertex],
    }
  ), {})
);

export const translateEdges = (mapping, edges) => (
  edges.map(edge => ({
    start: mapping[edge.start],
    end: mapping[edge.end],
  }))
);

export const translate = ({
  vertices, source, target, edges,
}) => {
  const mapping = vertices.reduce((accumulator, vertex) => (
    {
      ...accumulator,
      [vertex]: uuidv4(),
    }
  ), {});

  return {
    vertices: translateVertices(mapping, vertices),
    source: translatePosition(mapping, vertices, source),
    target: translatePosition(mapping, vertices, target),
    edges: translateEdges(mapping, edges),
  };
};
