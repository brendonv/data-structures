var makeTree = function(value){
  var newTree = {};
  newTree.value = value;
  newTree.children = [];
  newTree.parent = null;
  return $.extend(newTree, treeMethods);
};

var treeMethods = {};

treeMethods.addChild = function(value) {
  this.children.push(makeTree(value));
  this.children[this.children.length-1].parent = this;
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

treeMethods.removeFromParent = function() {
  if (this.parent) {
    var idx = this.parent.children.indexOf(this);
    this.parent.children[idx] = null;
    this.parent = null;
  }
  console.log(this);
};

