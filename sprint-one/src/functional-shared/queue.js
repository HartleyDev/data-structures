var makeQueue = function(){
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var queue = {
                size_count : 0,
                storage : {},
                head : 0,
                tail : 0
              };
  return _.extend(queue, queueMethods);
};

var queueMethods = {
  enqueue : function(value) {
    this.storage[this.tail] = value;
    this.size_count++;
    this.tail++;
  },
  dequeue : function() {
    if ( this.size_count > 0 ) {
      var result = this.storage[this.head];
      this.size_count--;
      this.head++;
      return result;
    }
  },
  size : function() {
    return this.size_count;
  }
};



