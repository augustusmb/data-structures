var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  this.total = 0;
  this.lastIn;
  this.penultimate;
};

Stack.prototype.push = function(value) {
  this.total++;
  this.penultimate = this.lastIn;
  this.lastIn = value;
};

Stack.prototype.pop = function() {
  if (this.total > 0) {
    this.total--;
  }
  var popped = this.lastIn;
  this.lastIn = this.penultimate;
  return popped;
}; 

Stack.prototype.size = function() {
  return this.total;
};


/*var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  this.total = 0;
  this.lastIn;
  this.penultimate;
};

Stack.prototype = {
  push: function(value) {
    this.total++;
    this.penultimate = this.lastIn;
    this.lastIn = value;
  }, 
  pop: function() {
    if (this.total > 0) {
      this.total--;
    }
    var popped = this.lastIn;
    this.lastIn = this.penultimate;
    return popped;
  }, 
  size: function() {
    return this.total;
  },
  constructor: Stack
};*/