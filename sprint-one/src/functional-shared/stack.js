var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var obj = {};
  obj.counter = 0;
  obj.lastIn;
  obj.penultimate;
  _.extend(obj, stackMethods);
  return obj;
};

var stackMethods = {
  push: function(value) {
    this.counter++;
    this.penultimate = this.lastIn;
    this.lastIn = value;
  }, 
  pop: function() {
    this.counter--;
    var popped = this.lastIn;
    this.lastIn = this.penultimate;
    return popped;
  }, 
  size: function() {
    return this.counter < 0 ? 0 : this.counter;
  }
};