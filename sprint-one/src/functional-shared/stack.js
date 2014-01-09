var stackMethods = {};

stackMethods.push = function(value){
  this.storage[this.len] = value;
  this.len++;
};

stackMethods.pop = function(){
  if(this.len) {
    this.len--;
    var result = this.storage[len];
    delete this.storage[len];
    return result;
  }
};

stackMethods.size = function(){
  return this.len;
};


var makeStack = function() {

  var instance = {
    storage: {},
    len: 0
  };

  return _.extend(instance, stackMethods);
};