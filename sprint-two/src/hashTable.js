var HashTable = function(){
  this._limit = 8;
  this._storage = makeLimitedArray(this._limit);
  this._count = 0;
};

HashTable.prototype.insert = function(k, v){
  var i = getIndexBelowMaxForKey(k, this._limit);
  var size = this._count / this._limit;
  if (size >= 0.75) this.rehash("increase");
  this._storage[i] = [];
  this._storage[i][0] = k;
  this._storage[i][1] = v;
  this._count++;
};

HashTable.prototype.retrieve = function(k){
  var i = getIndexBelowMaxForKey(k, this._limit);
  return this._storage[i][1];
};

HashTable.prototype.remove = function(k){
  var i = getIndexBelowMaxForKey(k, this._limit);
  this._storage[i][1] = null;
  var size = this._count / this._limit;
  if (size <= 0.25) this.rehash();
  this._count--;
};

HashTable.prototype.rehash = function(size) {
  var memo = [];
  for(var data in this._storage) {
    if(typeof this._storage[data] === 'object') {
      memo.push([this._storage[data][0], this._storage[data][1]]);
    } 
  }

  if (size === "increase") {
    this._limit *= 2;
  } else {
    this._limit /= 2;
  }
  this._storage = makeLimitedArray(this._limit);
  this._count = 0;

  for(var j = 0; j < memo.length; j++) {
    this.insert(memo[j][0], memo[j][1]);
  }
};

