class Heap {
  constructor() {
    this.heapElements = [];
  }
  insert(values) {
    this.heapElements.push(values);
    let currentElementIndex = this.heapElements.length - 1;
    let parentElementIndex = Math.floor((currentElementIndex + 1) / 2)-1;
    while(
      parentElementIndex >= 0 && 
      this.heapElements[currentElementIndex] > 
      this.heapElements[parentElementIndex]) 
      {
        const parentElement = this.heapElements[parentElementIndex];
        this.heapElements[parentElementIndex] = values;
        this.heapElements[currentElementIndex] = parentElement;
        currentElementIndex = parentElementIndex;
        parentElementIndex = Math.floor((currentElementIndex + 1) / 2)-1;
    } 
  }
  process() {
    if(this.heapElements.length ===0) {
      return null;
    }
    if(this.heapElements.length === 1) {
      return this.heapElements.pop();
    }
    const topElement = this.heapElements[0];
    this.heapElements[0] = this.heapElements.pop();
    let currentElementIndex = 2 * currentElementIndex +1;
    let rightElementIndex = 2 * currentElementIndex +2;
    let childElementIndex = this.heapElements[rightElementIndex] && 
    this.heapElements[rightElementIndex] > this.heapElements[currentElementIndex] ? rightElementIndex : currentElementIndex;
    while(this.heapElements[childElementIndex] && this.heapElements[currentElementIndex] < this.heapElements[childElementIndex]) {
     const currentNode = this.heapElements[currentElementIndex];
     const currentChildNode = this.heapElements[childElementIndex];
      this.heapElements[childElementIndex] = currentNode;
      this.heapElements[currentElementIndex] = currentChildNode; 
    }
    return topElement;
  }
}

const heap = new Heap();
heap.insert(40);
heap.insert(101);
heap.insert(197);
heap.insert(12);
heap.insert(15);
heap.insert(85);
heap.insert(250);

console.log(heap);