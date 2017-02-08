var Queue = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  var counter = 0;
  var top = 0;
  var size = 0;

  // Implement the methods below

  someInstance.enqueue = function(value) {
    someInstance[counter] = value;
    // someInstance = {1: b,  2: c}
    size++;
    counter++;
  };

  someInstance.dequeue = function() {
    if (size > 0) {
      size--;
    }
    var dequeued = someInstance[top];
    top++;
    return dequeued;
  };

  someInstance.size = function() {
    return size;
  };
  return someInstance;
};