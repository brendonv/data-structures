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
      node.previous = list.tail;
      list.tail.next = node;
      list.tail = node;
    }
  };

  list.removeHead = function(){
    list.head = list.head.next;
    list.head.previous = null;
  };

  list.contains = function(target, node) {
    node = list.head;
    while (node) {
      if (node.value === target) return true;
      node = node.next;
    }
    return false;
  };

  list.addToHead = function(value) {
    var node = makeNode(value);
    if (list.head) list.head.previous = node;
    node.next = list.head;
    list.head = node;
  };

  list.removeTail = function () {
    list.tail = list.tail.previous;
    list.tail.next = null;
  };

  return list;
};

var makeNode = function(value){

  var node = {};
  node.value = value;
  node.next = null;
  node.previous = null;

  return node;
};
