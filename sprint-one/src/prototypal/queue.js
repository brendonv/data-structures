var queueMethods = {};

queueMethods.enqueue = function(value){
  this.storage[this.len] = value;
  this.len++;
};

queueMethods.dequeue = function(){
  if(this.len) {
    this.len--;
    var result = this.storage[0];
    delete this.storage[0];
    for(var i=0;i<this.len;i++) {
      this.storage[i] = this.storage[i+1];
    }
    return result;
  }
};

queueMethods.size = function(){
  return this.len;
};


var makeQueue = function() {

  var instance = Object.create(queueMethods);
  
  instance.storage = {};
  instance.len = 0;

  return instance;
};
