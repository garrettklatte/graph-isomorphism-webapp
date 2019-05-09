import {distance} from '../utils/distance'

describe('distance', () => {
  it('returns true on matching distances', () => {
    // Given
    const distanceSource = {
      A: {
	A: 0,
	B: 10,
	C: 25
      },
      B: {
	A: 10,
	B: 0,
	C: 15
      },
      C: {
	A: 25,
	B: 15,
	C: 0
      }
    }
    const distanceTarget = {
      A: {
	A: 0,
	B: 15,
	C: 32,
      },
      B: {
	A: 15,
	B: 0,
	C: 9
      },
      C: {
	A: 32,
	B: 9,
	C: 0
      }
    }
    const vertices = ["A", "B", "C"]
    const delta = 10

    // When
    const matching = distance(distanceSource, distanceTarget, vertices, delta)

    // Then
    expect(matching).toBe(true)
  })

  it('returns false on nonmatching distances', () => {
    // Given
    const distanceSource = {
      A: {
	A: 0,
	B: 60,
	C: 25
      },
      B: {
	A: 60,
	B: 0,
	C: 15
      },
      C: {
	A: 25,
	B: 15,
	C: 0
      }
    }
    const distanceTarget = {
      A: {
	A: 0,
	B: 15,
	C: 32,
      },
      B: {
	A: 15,
	B: 0,
	C: 9
      },
      C: {
	A: 32,
	B: 9,
	C: 0
      }
    }
    const vertices = ["A", "B", "C"]
    const delta = 10

    // When
    const matching = distance(distanceSource, distanceTarget, vertices, delta)

    // Then
    expect(matching).toBe(false)
  })
})
