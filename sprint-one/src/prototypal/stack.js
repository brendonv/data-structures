var stackMethods = {};

stackMethods.push = function(value){
  this.storage[this.len] = value;
  this.len++;
};

stackMethods.pop = function(){
  if(this.len) {
    this.len--;
    var result = this.storage[this.len];
    delete this.storage[this.len];
    return result;
  }
};

stackMethods.size = function(){
  return this.len;
};


var makeStack = function() {

  var instance = Object.create(stackMethods);

  instance.storage = {};
  instance.len = 0;

  return instance;
};
