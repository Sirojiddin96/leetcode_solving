class Node {
  constructor (value) {
    this.value = value;
    this.next = null;
  }
}

class PriorityQueue {
  constructor(value, priority){
    this.value = value;
    this.first = null;
    this.priority = priority;
  }
  insert(value, priority){
    const newNode = new Node(value, priority);
    if(!this.first || priority > this.first.priority){
      newNode.next = this.first;
      this.first = newNode;
    }else {
      let currentNode = this.first;
      while(currentNode.next && priority < currentNode.next.priority){
        currentNode = currentNode.next;
      }
      newNode.next  = currentNode.next;
      currentNode = newNode;
    }
  }
  process() {
    const first = this.first;
    this.first = this.first.next;
    return first;
  }
}

const queue = new PriorityQueue();
queue.insert('Clean up the room', 1);
queue.insert('Do taxes', 2);
queue.insert('Cook dinner', 106);

console.log(queue);