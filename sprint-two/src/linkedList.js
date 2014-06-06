var makeLinkedList = function(){
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function(value){
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
    if (list.head !== null) {
      var result = list.head;
      delete list.head;
      list.head = result.next;
      return result.value;
    }
  };

  list.contains = function(target){
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

var makeNode = function(value){
  var node = {};

  node.value = value;
  node.next = null;

  return node;
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
