var makeBinarySearchTree = function(value){
  var tree = Object.create(treeMethods);
  tree.value = value;
  tree.left = null;
  tree.right = null;
  return tree;
};

var treeMethods = {};

treeMethods.insert = function(value) {
  var dive = function(node) {
    if (value < node.value) {
      if (!node.left) {
        node.left = makeBinarySearchTree(value);
      } else {
        dive(node.left);
      }
    } else {
      if (!node.right) {
        node.right = makeBinarySearchTree(value);
      } else {
        dive(node.right);
      }
    }
  };
  dive(this);
};

treeMethods.contains = function(value) {
  var result = false;
  var checknodes = function(node) {
    if (node.value === value) {
      result = true;
    } else if (node.left !== null && value < node.value) {
      checknodes(node.left);
    } else if (node.right !== null && value > node.value) {
      checknodes(node.right);
    }
  };
  checknodes(this);
  return result;
};

treeMethods.depthFirstLog = function(fun) {
  var allnodes = function(node) {
    fun(node.value);
    if (node.left) {
      allnodes(node.left);
    } else if (node.right) {
      allnodes(node.right);
    }
  };
  allnodes(this);
};
/*
 * Complexity: What is the time complexity of the above functions?
 */
