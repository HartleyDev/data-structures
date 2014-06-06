

var HashTable = function(){
  this._limit = 8;
  this._storage = makeLimitedArray(this._limit);
};

HashTable.prototype.insert = function(k, v){
  var i = getIndexBelowMaxForKey(k, this._limit);
  if (this._storage[i]) {
    var oldval = this._storage[i].original;
    this._storage[i] = { original: oldval, collision: v};
  } else {
    this._storage[i] = { original: v, collision: v};
  }
};

HashTable.prototype.retrieve = function(k){
  var i = getIndexBelowMaxForKey(k, this._limit);
  if (this._storage[i] === null) {
    return;
  }
  if (this._storage[i].original === k) {
    return this._storage[i].original;
  } else {
    return this._storage[i].collision;
  }
};

HashTable.prototype.remove = function(k){
  var i = getIndexBelowMaxForKey(k, this._limit);
  this._storage[i].original = null;
  this._storage[i].collision = null;
};

// this works, but separate chaining only handles a load factor of 2
// it would be educational to update handling a load factor of 10 (using an array)

/*
 * Complexity: What is the time complexity of the above functions?
 */
