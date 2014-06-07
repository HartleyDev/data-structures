var Graph = function(){
  this.nodes = {};
};

Graph.prototype.addNode = function(newNode, toNode){
  //var length = 0;
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
  return !!this.nodes[node];
};

Graph.prototype.removeNode = function(node){
  delete this.nodes[node];
};

Graph.prototype.getEdge = function(fromNode, toNode){
  return !!this.nodes[fromNode][toNode];
};

Graph.prototype.addEdge = function(fromNode, toNode){
  this.node[fromNode][toNode] = toNode;
  this.node[toNode][fromNode] = fromNode;
};

Graph.prototype.removeEdge = function(fromNode, toNode){
  delete this.nodes[fromNode][toNode];
  delete this.nodes[toNode][fromNode];
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
