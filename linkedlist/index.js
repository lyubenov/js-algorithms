// --- Directions
// Implement classes Node and Linked Lists
// See 'directions' document

class Node {
  constructor(data, next = null) {
    this.data = data
    this.next = next
  }
}

class LinkedList {
  constructor() {
    this.head = null
  }

  insertFirst(data) {
    this.insertAt(data, 0)
  }

  size() {
    let pointer = this.head
    let count = 0
    while (pointer) {
      count++
      pointer = pointer.next
    }
    return count
  }

  getFirst() {
    return this.getAt(0)
  }

  getLast() {
    /* let pointer = this.head
    if (pointer == null) {
      return null
    }
    while (pointer.next) {
      pointer = pointer.next
    } */
    return this.getAt(this.size() - 1)
  }

  clear() {
    this.head = null
  }

  removeFirst() {
    this.removeAt(0)
  }

  removeLast() {
    if (this.head == null) {
      return
    }

    if (this.head.next == null) {
      this.head = null
      return
    }

    let node = this.head.next
    let previous = this.head

    // Better
    while (node.next) {
      previous = node
      node = node.next
    }
    previous.next = null

    // Poor solution
    /* while (node) {
      if (node.next == null) {
        previous.next = null
        return
      }
      previous = node
      node = node.next
    } */
  }

  insertLast(data) {
    if (this.head == null) {
      this.head = new Node(data, this.head)
      return
    }

    let last = this.getLast()
    last.next = new Node(data)
  }

  getAt(index) {
    let node = this.head
    let count = 0

    while (node) {
      if (count === index) {
        return node
      }
      count++
      node = node.next
    }

    return null
  }

  removeAt(index) {
    if (index === 0) {
      this.head = this.head && this.head.next
      return
    }
    let prevNode = this.getAt(index - 1)
    if (prevNode) {
      prevNode.next = prevNode.next && prevNode.next.next
    }
  }

  insertAt(data, index) {
    if (index === 0) {
      this.head = new Node(data, this.head)
      return
    }
    let prevNode = this.getAt(index - 1)
    if (prevNode) {
      prevNode.next = new Node(data, prevNode.next)
    } else {
      this.insertLast(data)
    }
  }

  forEach(fn) {
    let node = this.head
    let counter = 0
    while (node) {
      fn(node, counter)
      node = node.next
      counter++;
    }
  }

  *[Symbol.iterator]() {
    let node = this.head;
    while (node) {
      yield node;
      node = node.next;
    }
  }
}

module.exports = { Node, LinkedList };
