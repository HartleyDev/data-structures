

var HashTable = function(){
  this._limit = 8;
  this._storage = makeLimitedArray(this._limit);
};

HashTable.prototype.insert = function(k, v){
  var i = getIndexBelowMaxForKey(k, this._limit);
  if(this._storage.get(i)){
    if (Array.isArray(this._storage[i])) {
      this._storage[i].push([k,v]);
    } else {
      var og = this._storage.get(i);
      this._storage[i] = [];
      this._storage[i].push(og);
      this._storage[i].push([k,v]);
    }
  }else {
    this._storage.set(i,v);
  }
};

HashTable.prototype.retrieve = function(k){
  var i = getIndexBelowMaxForKey(k, this._limit);
  if (Array.isArray(this._storage[i])) {
    for (var j = 0; j<this._storage[i].length ; j++) {
      if (this._storage[i][j][0] === k) {
        return this._storage[i][j][0];
      }
    }
  }
  return this._storage.get(i);
};

HashTable.prototype.remove = function(k){
  var i = getIndexBelowMaxForKey(k, this._limit);
  this._storage.set(i, null);
};

// this works, but separate chaining only handles a load factor of 2
// it would be educational to update handling a load factor of 10 (using an array)

/*
 * Complexity: What is the time complexity of the above functions?
 */
