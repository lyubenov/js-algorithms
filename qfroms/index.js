// --- Directions
// Implement a Queue data structure using two stacks.
// *Do not* create an array inside of the 'Queue' class.
// Queue should implement the methods 'add', 'remove', and 'peek'.
// For a reminder on what each method does, look back
// at the Queue exercise.
// --- Examples
//     const q = new Queue();
//     q.add(1);
//     q.add(2);
//     q.peek();  // returns 1
//     q.remove(); // returns 1
//     q.remove(); // returns 2

const Stack = require('./stack');

class Queue {
  constructor() {
    this.s1 = new Stack()
    this.s2 = new Stack()
  }

  add(element) {
    this.s1.push(element)
  }

  remove() {
    while (this.s1.peek()) {
      this.s2.push(this.s1.pop())
    }
    let removedElement = this.s2.pop()
    while (this.s2.peek()) {
      this.s1.push(this.s2.pop())
    }
    return removedElement
  }

  peek() {
    while (this.s1.peek()) {
      this.s2.push(this.s1.pop())
    }
    let valToReturn = this.s2.peek()
    while (this.s2.peek()) {
      this.s1.push(this.s2.pop())
    }
    return valToReturn
  }
}

let q = new Queue()
q.add(1)
q.add(2)
q.add(3)
q.add(4)
q.add(5)
q.add(6)
q.add(7)
q.remove()
console.log(q.peek())
q.add(8)
q.remove()
console.log(q)

module.exports = Queue;
