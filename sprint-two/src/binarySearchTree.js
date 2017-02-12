var BinarySearchTree = function(value) {
  this.value = value;
  this.left = null;
  this.right = null;
};

BinarySearchTree.prototype.insert = function(value) {
  // if value === this.value
  if (this.value = value) {
    // do nothing
  } else if (value > this.value) {
  // else if value > this.value
    // set right property to value
    this.right = value;
  } else {
  // else
    // set left property to value
    this.left = value;
  }
};

BinarySearchTree.prototype.contains = function() {
  
};

BinarySearchTree.prototype.depthFirstLog = function() {
  
};
/*
 * Complexity: What is the time complexity of the above functions?
 */
