var LinkedList = function() {
  var list = {};
  var headValue = false;
  list.head = null;
  list.tail = null;

  list.addToTail = function(value) {
    var current = Node(value);
    if (!headValue) {
      list.head = current;
      list.tail = current;      
      headValue = true;
    } else {
      list.tail.next = current;
      list.tail = current;
    }
  };
  list.removeHead = function() {
    var removed = list.head.value;
    list.head = list.head.next; 
    return removed;
  };
  list.contains = function(target) {
    for (var key in list) {
      if (list[key].value === target) {
        return true;
      } else if (list[key].next === null) {
        return false;
      }
    }
  };
  return list;
};

var Node = function(value) {
  var node = {};

  node.value = value;
  node.next = null;

  return node;
};

/*
 * Complexity: What is the time complexity of the above functions? constant, constant, linear
 */

/*  
  list.contains = function(target) {
    var findValue = function (node) {
      if (node.value === target) {
        return true;
      } else if (node.next === null) {
        return false;
      }
      return findValue(node.next);
    };
    findValue(list.head);
  };*/