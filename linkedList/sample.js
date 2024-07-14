// 10-->5-->16

// let linkedList = {
//   head:{
//     value:10,
//     next: {
//       value: 5,
//       next: {
//         value: 16,
//         next: null
//       }
//     }
//   }
// }

class Node {
  constructor(value){
    this.value = value;
    this.next = null,
    this.prev = null
  }
}

class LinkedList {
  constructor(value){
    this.head = {
      value: value,
      next: null,
      prev: null
    }
    this.tail = this.head;
    this.length = 1;
  }
  append(value){
    const newNode = new Node(value);
    newNode.prev = this.tail
    this.tail.next = newNode;
    this.tail = newNode;
    this.length++;
    return this
  }
  prepend(value){
    const newNode = new Node(value);
    newNode.next = this.head;
    this.head.prev = newNode
    this.head = newNode;
    this.length++;
    return this
  }
  printList(){
    const array = [];
    let currentNode = this.head;
    while(currentNode !== null){
      array.push(currentNode.value);
      currentNode = currentNode.next
    }
    console.log(array);
    return array
  }
  insert(index, value){
    // check parameters
    if(index >= this.length){
      return this.append(value)
    }
    const newNode = new Node(value);
    const leader = this.traverseToIndex(index-1)
    const follower = leader.next;
    leader.next = newNode
    newNode.prev = leader
    newNode.next = follower
    follower.prev = newNode
    this.length++
    return this
    
  }

  traverseToIndex(index){
    // check parameters
    let counter = 0;
    let currentNode = this.head;
    while(counter !== index){
      if(currentNode === null){
        return currentNode
       }  
      currentNode = currentNode.next
      counter++
    }
    return currentNode
  }
  remove(index){
    // check parameters
    const leader = this.traverseToIndex(index-1)
    if(index>= this.length){
      return null
    }
    const unwantedNode = leader.next
    leader.next = unwantedNode.next
    this.length--
    return this
  }
  reverse(){
    if(!this.head.next) return this.head
    let first = this.head;
    this.tail = this.head
    let second = first.next;
    while(second){
      const temp = second.next
      second.next =first;
      first =second;
      second = temp
    }
    this.head.next = null
    this.head= first;
    return this
  }
}



const myLinkedList = new LinkedList(10);
myLinkedList.append(5)
myLinkedList.append(16)
myLinkedList.prepend(19)
myLinkedList.insert(2, 99)
myLinkedList.printList()
myLinkedList.reverse()
console.log(myLinkedList);
 