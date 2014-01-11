var makeBinarySearchTree = function(value){
  var node = Object.create(methods);
  node.value = value;
  node.left = {};
  node.right = {};
  return node;
};

var methods = {};

methods.insert = function(val) {
  var node = makeBinarySearchTree(val);

  var recurse = function(element) { 
    if (val < element.value) {
      if (element.left.value) {
        return recurse(element.left);
      } else {
        element.left = node;
      }

    } else {
      if (element.right.value) {
        return recurse(element.right);
      } else {
        element.right = node;
      }
    }
  };

  recurse(this);
};

methods.contains = function(val) {
  var matched = false;

  var recurse = function(element) { 
    if (val < element.value) {
      if (element.left.value === val) matched = true;
      if (element.left.value) {
        recurse(element.left);
      } 
    } else {
      if (element.right.value === val) matched = true;
      if (element.right.value) {
        recurse(element.right);
      }
    }
  };

  recurse(this);
  return matched;
};

methods.depthFirstLog = function(func) {

  var recurse = function(element) { 
    if (element.left.value) {
      recurse(element.left);
    }

    if (element.right.value) {
      recurse(element.right);
    }

    element.value = func(element.value);
  };

  recurse(this);
};
