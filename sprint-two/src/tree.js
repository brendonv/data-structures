var makeTree = function(value){
  var newTree = {};
  newTree.value = value;
  newTree.children = [];
  return $.extend(newTree, treeMethods);
};

var treeMethods = {};

treeMethods.addChild = function(value) {
  this.children.push(makeTree(value));
};

treeMethods.contains = function(target) {
  var matched = false;

  var inspect = function(leaf) {
    if (leaf.children) {
      for (var i=0; i < leaf.children.length; i++) {
        if (leaf.children[i].children.length) {
          inspect(leaf.children[i]);
        }
        if (leaf.children[i].value === target){
          matched = true;
        }
      }
    }
  };

  inspect(this);
  return matched;
};

