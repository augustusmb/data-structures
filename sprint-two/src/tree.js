var Tree = function(value) {
  var newTree = {};
  newTree.value = value;
  _.extend(newTree, treeMethods);
  // your code here
  newTree.children = [];  // fix me


  return newTree;
};

var treeMethods = {};

treeMethods.addChild = function(value) {
  //newTree.children = value;
  this.children.push(value);
};

treeMethods.contains = function(target) {
  return this.children.includes(target);
};



/*
 * Complexity: What is the time complexity of the above functions?
 */
