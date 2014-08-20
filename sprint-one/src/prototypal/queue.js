var makeQueue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style(
    var que = Object.create(queueMethods);
    que._size = 0;
    que._head = 0;
    que._tail = 0;
    que._storage = {};
    return que;
  };

  var queueMethods = {
    enqueue: function(value){
      this._storage[this._tail] = value;
      this._size++;
      this._tail++;
    },
    dequeue: function(){
      if(this._size > 0){
        this._size--;
        var result = this._storage[this._head];
        delete this._storage[this._head];
        this._head++;
        return result;
      }
    },
    size: function(){
      return this._size;
    }
};


