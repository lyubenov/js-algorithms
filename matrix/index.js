// --- Directions
// Write a function that accepts an integer N
// and returns a NxN spiral matrix.
// --- Examples
//   matrix(2)
//     [[1, 2],
//     [4, 3]]
//   matrix(3)
//     [[1, 2, 3],
//     [8, 9, 4],
//     [7, 6, 5]]
//  matrix(4)
//     [[1,   2,  3, 4],
//     [12, 13, 14, 5],
//     [11, 16, 15, 6],
//     [10,  9,  8, 7]]

function matrix(n) {
  let matrix = getMatrixSkeleton(n)

  let topBoundary = 0
  let rightBoundary = n - 1
  let bottomBoundary = n - 1
  let leftBoundary = 0

  const TOP = 'TOP'
  const RIGHT = 'RIGHT'
  const BOTTOM = 'BOTTOM'
  const LEFT = 'LEFT'

  let direction = TOP
  let index = 1

  while (index <= n ** 2) {
    switch (direction) {
      case TOP:
        for (let col = leftBoundary; col <= rightBoundary; col++) {
          matrix[topBoundary][col] = index++
        }
        topBoundary++
        direction = RIGHT
        break;
      case RIGHT:
        for (let row = topBoundary; row <= bottomBoundary; row++) {
          matrix[row][rightBoundary] = index++
        }
        rightBoundary--
        direction = BOTTOM
        break;
      case BOTTOM:
        for (let col = rightBoundary; col >= leftBoundary; col--) {
          matrix[bottomBoundary][col] = index++
        }
        bottomBoundary--
        direction = LEFT
        break;
      case LEFT:
        for (let row = bottomBoundary; row >= topBoundary; row--) {
          matrix[row][leftBoundary] = index++
        }
        leftBoundary++
        direction = TOP
        break;
    }
  }
  console.log(matrix)
  return matrix
}



function getMatrixSkeleton(n) {
  let matrix = []
  for (let i = 0; i < n; i++) {
    matrix.push(new Array(n))
  }
  return matrix
}

console.log(matrix(4))
module.exports = matrix;
