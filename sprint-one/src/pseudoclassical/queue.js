var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  this.total = 0;
  this.counter = 0; 
  this.firstInLine = 0;
};

Queue.prototype = {
  enqueue: function(value) {
    this[this.counter] = value;
    this.counter++;
    this.total++;
  },
  dequeue: function() {
    if (this.total > 0) {
      this.total--;
    }
    var dequeued = this[this.firstInLine];
    this.firstInLine++;
    return dequeued;
    
  },
  size: function() {
    return this.total;
  },
  constructor: Stack
};

// var obj = new Stack();