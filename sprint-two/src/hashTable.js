

var HashTable = function(){
  this._limit = 8;
  this._storage = makeLimitedArray(this._limit);
};

HashTable.prototype.insert = function(k, v){
  // time complexity = linear  **effectively constant**
  var i = getIndexBelowMaxForKey(k, this._limit);
  if (this._storage.get(i) === undefined) {
    // non-existing insertion = constant
    this._storage.set(i, [[k,v]]);
  } else {
    // updating existing value = linear
    for (var j = 0 ; j < this._storage.get(i).length ; j++) {
      if (this._storage.get(i)[j][0] === k) {
        this._storage.set(i)[j][1] = v;
        return;
      }
    }
    this._storage.get(i).push([k,v]);
  }
};

HashTable.prototype.retrieve = function(k){
  // time complexity = linear **effectively constant**
  // in hashtable index lookup TC = constant
  var i = getIndexBelowMaxForKey(k, this._limit);
  // in the subarray lookup TC = linear
  for (var r = 0; r<this._storage.get(i).length ; r++) {
    if (this._storage.get(i)[r][0] === k) {
      return this._storage.get(i)[r][1];
    }
  }
  return null;
};

HashTable.prototype.remove = function(k){
  // TC = TC for retrieve
  var i = getIndexBelowMaxForKey(k, this._limit);
  for (var j = 0 ; j < this._storage.get(i).length ; j++) {
    if (this._storage.get(i)[j][0] === k) {
      this._storage.get(i).splice(j, 1);
    }
  }
};

// this works, but separate chaining only handles a load factor of 2
// it would be educational to update handling a load factor of 10 (using an array)

/*
 * Complexity: What is the time complexity of the above functions?
 */
