import { translateEdges, translatePosition, translateVertices } from '../utils/translate';

describe('translate', () => {
  it('translate edges', () => {
    // Given
    const mapping = {
      A: 'M',
      B: 'N',
    };
    const edges = [
      {
        start: 'A',
        end: 'B',
      },
    ];

    // When
    const newEdges = translateEdges(mapping, edges);

    // Then
    expect(newEdges).toStrictEqual(
      [{
        start: 'M',
        end: 'N',
      }],
    );
  });

  it('translate position', () => {
    // Given
    const mapping = {
      A: 'M',
      B: 'N',
    };
    const vertices = ['A', 'B'];
    const source = {
      A: {
        x: 10,
        y: 25,
      },
      B: {
        x: 50,
        y: 60,
      },
    };

    // When
    const newPosition = translatePosition(mapping, vertices, source);

    // Then
    expect(newPosition).toStrictEqual(
      {
        M: {
          x: 10,
          y: 25,
        },
        N: {
          x: 50,
          y: 60,
        },
      },
    );
  });

  it('translate vertices', () => {
    // Given
    const mapping = {
      A: 'M',
      B: 'N',
    };
    const vertices = ['A', 'B'];

    // When
    const newVertices = translateVertices(mapping, vertices);

    // Then
    expect(newVertices).toStrictEqual(['M', 'N']);
  });
});
