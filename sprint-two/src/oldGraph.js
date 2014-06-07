var Graph = function(){
  this.nodes = [];
};

Graph.prototype.addNode = function(newNode, toNode){
  var toNodeArray = [];
  if (toNode) {
    toNodeArray.push(toNode);
  } else if (this.nodes.length === 1) {
    toNodeArray.push(this.nodes[0].value);
    this.nodes[0].edges.push(newNode);
  }
  var node = {
    value : newNode,
    edges : toNodeArray
  };
  this.nodes.push(node);
};

Graph.prototype.contains = function(node){
  for (var i = 0; i<this.nodes.length ; i++) {
    if (this.nodes[i].value === node) {
      return true;
    }
  }
  return false;
};

Graph.prototype.removeNode = function(node){
  for (var i = 0; i<this.nodes.length ; i++) {
    if (this.nodes[i].value === node) {
      this.nodes.splice(i, 1);
    }
  }
};

Graph.prototype.getEdge = function(fromNode, toNode){
  for (var i = 0; i<this.nodes.length ; i++) {
    if (this.nodes[i].value === fromNode) {
      for (var k=0; k<this.nodes[i].edges.length; k++) {
        if (this.nodes[i].edges[k] === toNode) {
          return true;
        }
      }
    }
  }
  return false;
};

Graph.prototype.addEdge = function(fromNode, toNode){
  for (var i = 0; i<this.nodes.length ; i++) {
    if (this.nodes[i].value === fromNode) {
      this.nodes[i].edges.push(toNode);
    } else if (this.nodes[i].value === toNode) {
      this.nodes[i].edges.push(fromNode);
    }
  }
};

Graph.prototype.removeEdge = function(fromNode, toNode){
  var remove;
  for (var i = 0; i<=this.nodes.length ; i++) {
    if (this.nodes[i].edges.length === 0) {
      this.removeNode(this.nodes[i].value);
    }
    if (this.nodes[i].value === fromNode) {
      for (var k=0; k<this.nodes[i].edges.length; k++) {
        if (this.nodes[i].edges[k] === toNode) {
          this.nodes[i].edges.splice(k,1);
        }
        if (this.nodes[i].edges.length === 0) {
          remove = this.nodes[i].value;
        }
      }
    } else if (this.nodes[i].value === toNode) {
      for (var k=0; k<this.nodes[i].edges.length; k++) {
        if (this.nodes[i].edges[k] === fromNode) {
          this.nodes[i].edges.splice(k,1);
        }
        if (this.nodes[i].edges.length === 0) {
          remove = this.nodes[i].value;
        }
      }
    }
  }
  this.removeNode(remove);
  console.log(this.nodes);
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
