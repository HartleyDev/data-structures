var makeTree = function(value){
  var newTree = Object.create(treeMethods);
  newTree.value = value;
  newTree.children = [];
  return newTree;
};




var treeMethods = {};

treeMethods.addChild = function(value){
    this.children.push(makeTree(value));

};

treeMethods.contains = function(target){
  var result = false;
  var search = function(child){
    if(child.value === target){
      result = true;
    }else {
      for(var i = 0; i < child.children.length; i++){
        search(child.children[i]);
      }
    }
  };
  search(this);
  return result;
};


/*
 * Complexity: What is the time complexity of the above functions?
 */
