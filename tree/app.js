class Node {
  constructor (value, parentNode = null) {
    this.children = [];
    this.value = value;
    this.parent = parentNode;
  }
  addNode(value){
    const node = new Node(this.value, this)
    this.children.push(new Node(value, this))
    return {node, index: this.children.length - 1}
  }
  removeNode(index){
    this.children.splice(index, 1)
  }
}

class Tree {
  constructor (rootValue) {
    this.root = new Node(rootValue);
  }
}

const fileSystem = new Tree('/')
const documentNodeData = fileSystem.root.addNode('/documents')
const gamesNodeData = fileSystem.root.addNode('/games')
documentNodeData.node.addNode('resume.txt')
documentNodeData.node.addNode('code.exe')