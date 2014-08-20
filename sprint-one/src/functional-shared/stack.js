var makeStack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var stack = {
                size_count: 0,
                storage: {}
              };

  return _.extend(stack, stackMethods);
};

var stackMethods = {
  push: function(value){
    this.storage[this.size_count] = value;
    this.size_count++;
  },
  pop: function(){
    if(this.size_count > 0){
      this.size_count--;
      var result = this.storage[this.size_count];
      delete this.storage[this.size_count];
      return result;
    }
  },
  size: function(){
    return this.size_count;
  }

};

