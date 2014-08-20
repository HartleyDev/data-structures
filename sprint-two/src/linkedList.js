var makeNode = function(value){
  // time complexity = constant
  var node = {};

  node.value = value;
  node.next = null;

  return node;
};

var makeLinkedList = function(){
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function(value){
    // time complexity = constant
    var newnode = makeNode(value);
    if (list.head === null) {
      list.head = newnode;
      list.tail = newnode;
    } else {
      var prevnode = list.tail;
      list.tail = newnode;
      prevnode.next = list.tail;
    }
  };

  list.removeHead = function() {
    // time complexity = constant
    if (list.head !== null) {
      var result = list.head;
      delete list.head;
      list.head = result.next;
      return result.value;
    }
  };

  list.contains = function(target){
    // time complexity = linear
    var result = false;
    var nextnode = function(node) {
      if ( node && node.value === target ) {
        result = true;
      } else if ( node && node.next ) {
        nextnode(node.next);
      }
    };
    nextnode(list.head);
    return result;
  };

  return list;
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
