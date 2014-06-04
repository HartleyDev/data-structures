var makeStack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var stack = Object.create(stackMethods);
  stack.size_count = 0;
  stack.storage = {};
  return stack;
};

var stackMethods = {
  push : function(value) {

  },
  pop : function() {

  },
  size : function() {
    return this.size_count;
  }
};


var myStack = makeStack.create();
