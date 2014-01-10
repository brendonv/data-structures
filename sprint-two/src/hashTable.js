var HashTable = function(){
  this._limit = 8;
  this._storage = makeLimitedArray(this._limit);
  // console.log(makeLimitedArray());
  //console.log(this, this._storage);
};

HashTable.prototype.insert = function(k, v){
  var i = getIndexBelowMaxForKey(k, this._limit);
  this._storage[i] = {k: v};
};

HashTable.prototype.retrieve = function(k){
  var i = getIndexBelowMaxForKey(k, this._limit);
  return this._storage[i].k;
};

HashTable.prototype.remove = function(k){
  var i = getIndexBelowMaxForKey(k, this._limit);
  this._storage[i].k = null;
};

