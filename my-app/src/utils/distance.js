export const distance = (distanceSource, distanceTarget, vertices, delta) => (
  vertices.reduce((acc, outer) => (
    acc && vertices.reduce((umm, inner) => (
      umm && Math.abs(distanceSource[outer][inner] -
		      distanceTarget[outer][inner]) < delta
    ), true)
  ), true)
)
