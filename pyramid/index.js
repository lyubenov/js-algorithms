// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a pyramid shape
// with N levels using the # character.  Make sure the
// pyramid has spaces on both the left *and* right hand sides
// --- Examples
//   pyramid(1)
//       '#'
//   pyramid(2)
//       ' # '
//       '###'
//   pyramid(3)
//       '  #  '
//       ' ### '
//       '#####'

/* function pyramid(n) {
  for (let row = 1; row <= n; row++) {
    let str = `${' '.repeat(n - row)}${'#'.repeat(getHashes(n, row))}${' '.repeat(n - row)}`
    console.log(str)
  }
}

function getHashes(n, row) {
  let totalColumns = n * 2 - 1
  let totalSpaces = (n - row) * 2
  return totalColumns - totalSpaces
} */

function pyramid(n, row = 0, stair = '') {
  if (row === n) {
    return
  }

  if (stair.length === (n * 2) - 1) {
    console.log(stair)
    return pyramid(n, row + 1)
  }

  const midpoint = Math.floor((2 * n - 1) / 2);
  if (midpoint - row <= stair.length && midpoint + row >= stair.length) {
    pyramid(n, row, stair += '#')    
  } else {
    pyramid(n, row, stair += ' ')
  }
}

pyramid(4)

module.exports = pyramid;
