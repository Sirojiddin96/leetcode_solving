/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */

class ListNode {
  constructor(value) {
    this.val = value;
    this.next = null;
  }
}

class LinkedList {
  constructor(value) {
    this.head = {
      value: value,
      next: null
    }
  }
  append(value) {
    let newNode = new ListNode(value);
    let current = this.head;
    while (current.next) {
      current = current.next;
    }
    current.next = newNode;
    return this;
  }
  printList(){
    const array = [];
    let currentNode = this.head;
    while(currentNode !== null){
      array.push(currentNode.value);
      currentNode = currentNode.next
    }
    return array
  }
}

let l1 = new LinkedList(9);
l1.append(9);
l1.append(9);
l1.append(9);
l1.append(9);
l1.append(9);
l1.append(9);

let l2 = new LinkedList(9);
l2.append(9);
l2.append(9);
l2.append(9);

function addTwoNumbers(l1, l2) {
  let sum = 0;
  let dummyHead = new ListNode();
  let node1 = l1.head
  let node2 = l2.head
  let current = dummyHead
  let carry = 0;
  while (node1 != null && node2 != null) {
  let x = node1!== null ? node1.val : 0
  let y = node2!== null ? node2.val : 0
  sum = x + y + carry
  carry = Math.floor(sum/10)
  current.next = new ListNode(sum % 10);
  current = current.next;
  if(node1!== null) node1 = node1.next
  if(node2!== null) node2 = node2.next
  if (carry > 0) {
    current.next = new ListNode(carry);
  }
  }

  let result = new ListNode();
  result.head = dummyHead.next
  return result.next
}

// Accepted Answer
// function addTwoNumbers(l1, l2) {
//   let dummyHead = new ListNode();
//   let res = dummyHead;
//   let total = 0, carry = 0;
//   while(l1 || l2 || carry) {
//      total = carry;
//     if(l1) {
//       total += l1.val;
//       l1 = l1.next;
//     }
//     if(l2) {
//       total += l2.val;
//       l2 = l2.next;
//     }
//      let num = total % 10;
//      carry = Math.floor(total / 10);
//      dummyHead.next = new ListNode(num);
//      dummyHead = dummyHead.next;
//   }
//   return res.next
// }

// const res = addTwoNumbers(l1, l2)

// console.log('Res', res.printList());

function addTwoNumbers(l1, l2) {
  let dummyHead = new ListNode();
  let current = dummyHead;
  let carry = 0;
  while(l1 || l2 || carry) {
    let sum = 0;
    if(l1) {
      sum += l1.value;
      l1 = l1.next;
    }
    if(l2) {
      sum += l2.value;
      l2 = l2.next;
    }
    sum += carry;
    carry = Math.floor(sum/10);
    current.next = new ListNode(sum % 10);
    current = current.next;
  }
  return dummyHead.next
}