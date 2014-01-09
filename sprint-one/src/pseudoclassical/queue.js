var Queue = function() {
  // Hey! Copy your code from src/prototypal/queue.js and paste it here
  this.storage = {};
  this._size = 0;
};

Queue.prototype.enqueue = function(value) {
  this.storage[this._size] = value;
  this._size++;
};

Queue.prototype.dequeue = function() {
  if(this._size){
    this._size--;
    var result = this.storage[0];
    delete this.storage[0];
    for(var i = 0; i<this._size; i++) {
      this.storage[i] = this.storage[i+1];
    }
    return result;
  }
};

Queue.prototype.size = function() {
  return this._size;
};
