var makeNode = function(value){
  // time complexity = constant
  var node = {};

  node.value = value;
  node.next = null;
  node.previous = null;

  return node;
};

var makeLinkedList = function(){
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function(value){
    // time complexity = constant
    var newnode = makeNode(value);
    // case with empty list
    if (list.head === null) {
      list.head = newnode;
      list.tail = newnode;
    } else {
      // case with list size >= 1
      var prevnode = list.tail;
      list.tail = newnode;
      // update old tail a new next
      prevnode.next = list.tail;
      // update new tail with a new previous
      list.tail.previous = prevnode;
    }
  };

  list.removeHead = function() {
    // time complexity = constant
    var oldHead = list.head;
    // if there is more than 1 node in the list
    if (list.head !== list.tail) {
      delete list.head;
      list.head = oldHead.next;
      list.head.previous = null;
    } else {
      delete list.head;
    }
    return oldHead.value;
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

  list.addToHead = function(value){
    // takes a value and adds it to the beginning of list
    var newnode = makeNode(value);
    // case with empty list
    if (list.head === null) {
      list.head = newnode;
      list.tail = newnode;
    } else {
      // case with list size >= 1
      var prevHeadNode = list.head;
      list.head = newnode;
      // update old tail a new next
      prevHeadNode.previous = list.head;
      // update new tail with a new previous
      list.head.next = prevHeadNode;
    }
  };

  list.removeTail = function(){
    // time complexity = constant
    var oldTail = list.tail;
    // if there is more than 1 node in the list
    if (list.head !== list.tail) {
      delete list.tail;
      list.tail = oldTail.previous;
      list.tail.next = null;
    } else {
      delete list.tail;
    }
    return oldTail.value;
  };

  return list;
};
