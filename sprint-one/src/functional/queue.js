var makeQueue = function(){
  var someInstance = {};
  var size = 0;
  var head = 0;
  var tail = 0;
  // Use an object with numeric keys to store values
  var storage = {};

  // Implement the methods below

  someInstance.enqueue = function(value){
    storage[tail] = value;
    tail++;
    size++;
  };

  someInstance.dequeue = function(){
    if(size > 0){
      var result =  storage[head];
      delete storage[head];
      head++;
      size--;
      return result;
    }
  };

  someInstance.size = function(){
    return size;
  };

  return someInstance;
};
