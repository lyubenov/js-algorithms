// --- Directions
// Given the root node of a tree, return
// an array where each element is the width
// of the tree at each level.
// --- Example
// Given:
//     0
//   / |  \
// 1   2   3
// |       |
// 4       5
// Answer: [1, 3, 2]

const Node = require('./node')

function levelWidth(root) {
  const STOPPER = 'STOPPER'
  let counters = [0]
  let arr = [root, STOPPER]

  while (true) {
    let node = arr.shift()
    if (node === STOPPER) {
      counters.push(0)
      arr.push(STOPPER)
    } else {
      counters[counters.length - 1]++
      arr.push(...node.children)
    }
    if (arr.length === 1 && arr[0] === STOPPER) {
      return counters
    }
  }
}

module.exports = levelWidth;
