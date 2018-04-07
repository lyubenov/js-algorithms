// --- Directions
// 1) Implement the Node class to create
// a binary search tree.  The constructor
// should initialize values 'data', 'left',
// and 'right'.
// 2) Implement the 'insert' method for the
// Node class.  Insert should accept an argument
// 'data', then create an insert a new node
// at the appropriate location in the tree.
// 3) Implement the 'contains' method for the Node
// class.  Contains should accept a 'data' argument
// and return the Node in the tree with the same value.

class Node {
  constructor (data) {
    this.left = null
    this.data = data
    this.right = null
  }

  insert (dataToInsert, currentNode = this) {
    if (currentNode.data > dataToInsert) {
      if (currentNode.left == null) {
        currentNode.left = new Node(dataToInsert)
      } else {
        return this.insert(dataToInsert, currentNode.left)
      }
    }

    if (currentNode.data < dataToInsert) {
      if (currentNode.data < dataToInsert) {
        if (currentNode.right == null) {
          currentNode.right = new Node(dataToInsert)
        } else {
          return this.insert(dataToInsert, currentNode.right)
        }
      }
    }
  }

  contains (searchData, currentNode = this) {
    if (!currentNode) {
      return null
    }

    if (searchData < currentNode.data) {
      return this.contains(searchData, currentNode.left)
    }

    if (searchData > currentNode.data) {
      return this.contains(searchData, currentNode.right)
    }

    if (searchData === currentNode.data) {
      return currentNode
    }
  }

}

const node = new Node(10)
node.insert(5)
node.insert(15)
node.insert(17)
node.insert(12)
node.insert(13)

console.log(node.contains(12))

module.exports = Node
