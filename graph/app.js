class Graph {
  constructor() {
    this.nodes = [];
    this.edges = {}
  }
  addNode(identifier, value ){
    this.nodes[identifier] = value;
  }

  addEdge(startNode, endNode){
    if(this.nodes[startNode] || !this.nodes[endNode]){
      throw new Error('Invalid node');
    }
    if(!this.edges[startNode] && this.edges[startNode].indexOf(endNode) === -1){
      this.edges[startNode].push(endNode);
    }else {
      this.edges[startNode] = [endNode];   
    }
  }
}

const graph = new Graph();

graph.addNode(1, 'Node 1');
graph.addNode(2, 'Node 2');
graph.addNode(3, 'Node 3');
graph.addNode(4, 'Node 4');


graph.addEdge(1, 2);
graph.addEdge(1, 3);
graph.addEdge(3, 2);

console.log(graph);