var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  this._size = 0;
  this._head = 0;
  this._tail = 0;
  this._storage = {};
};

Queue.prototype.size = function() {
  return this._size;
};

Queue.prototype.enqueue = function(val) {
  this._storage[this._tail] = val;
  this._size++;
  this._tail++;
};

Queue.prototype.dequeue = function() {
  if (this._size > 0) {
    var result = this._storage[this._head];
    delete this._storage[this._head];
    this._size--;
    this._head++;
    return result;
  }
};


