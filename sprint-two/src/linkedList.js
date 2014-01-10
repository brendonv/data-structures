var makeLinkedList = function(){
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function(value){
    var node = makeNode(value);
    if (!list.head) {
      list.tail = node;
      list.head = node;
    } else {
      list.tail.next = node;
      list.tail = node;
    }
  };

  list.removeHead = function(){
    list.head = list.head.next;
    return list.head;
  };

  list.contains = function(target, node) {
    node = list.head;
    while (node) {
      if (node.value === target) return true;
      node = node.next;
    }
    return false;
  };

  return list;
};

var makeNode = function(value){

  var node = {};
  node.value = value;
  node.next = null;

  return node;
};
