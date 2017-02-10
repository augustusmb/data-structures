var Tree = function(value) {
  var newTree = {};
  _.extend(newTree, treeMethods);
  newTree.value = value;
  newTree.children = [];
  return newTree;
};

var treeMethods = {};

treeMethods.addChild = function(value) {
  this.children.push(Tree(value));
};

treeMethods.contains = function(target) {
  if (this.value === target) {
    return true;
  }
  for (var i = 0; i < this.children.length; i++) {
    if (this.children[i].contains(target)) {
      return true;
    }
  }
  return false;
};

/*
 * Complexity: What is the time complexity of the above functions? 
 addChild is constant.  contains is linear
 */




// var tree5 = Tree(value);

// tree5.addChild(7);