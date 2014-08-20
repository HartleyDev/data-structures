var Graph = function(){
  this.nodes = {};
};

Graph.prototype.addNode = function(newNode, toNode){
  // TC = constant
  var thisToNodes = {};
  if (toNode) {
    thisToNodes[toNode] = toNode;
  }
  if (Object.keys(this.nodes).length === 1 ) {
    var firstNodeName = Object.keys(this.nodes)[0];
    this.nodes[firstNodeName][newNode] = newNode;
    thisToNodes[firstNodeName] = firstNodeName;
  }
  this.nodes[newNode] = thisToNodes;
};

Graph.prototype.contains = function(node){
  // TC = constant
  return !!this.nodes[node];
};

Graph.prototype.removeNode = function(node){
  // TC = constant
  delete this.nodes[node];
};

Graph.prototype.getEdge = function(fromNode, toNode){
  // TC = constant
  return !!this.nodes[fromNode][toNode];
};

Graph.prototype.addEdge = function(fromNode, toNode){
  // TC = constant
  this.nodes[fromNode][toNode] = toNode;
  this.nodes[toNode][fromNode] = fromNode;
};

Graph.prototype.removeEdge = function(fromNode, toNode){
  // TC = constant
  delete this.nodes[fromNode][toNode];
  delete this.nodes[toNode][fromNode];
  if(Object.keys(this.nodes[fromNode]).length < 1){
    delete this.nodes[fromNode];
  }
  if(Object.keys(this.nodes[toNode]).length < 1){
    delete this.nodes[toNode];
  }
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
