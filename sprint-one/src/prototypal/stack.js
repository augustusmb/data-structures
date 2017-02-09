var stackMethods = {
  push: function(value) {
    this.total++;
    this.penultimate = this.lastIn;
    this.lastIn = value;
  },
  pop: function() {
    this.total--;
    var popped = this.lastIn;
    this.lastIn = this.penultimate;
    return popped;
  },
  size: function() {
    return this.total < 0 ? 0 : this.total;
  }
};

var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var obj = Object.create(stackMethods);
  obj.total = 0;
  obj.lastIn;
  obj.penultimate;
  return obj;
};