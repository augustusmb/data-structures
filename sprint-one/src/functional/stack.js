var Stack = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  var size = 0;
  var lastIn;
  var penultimate;

  // Implement the methods below
  someInstance.push = function(value) {
    size++;
    penultimate = lastIn;
    lastIn = value;
  };

  someInstance.pop = function() {
    size--;
    var popped = lastIn;
    lastIn = penultimate;
    return popped;
  };

  someInstance.size = function() {
    return size < 0 ? 0 : size;
  };

  return someInstance;
};