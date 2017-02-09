var queueMethods = {
  enqueue: function(value) {
    this[this.counter] = value;
    this.total++;
    this.counter++;
  },
  dequeue: function() {
    if (this.total > 0) {
      this.total--;
    }
    var deleted = this[this.inFront];
    this.inFront++;
    return deleted;
  },
  size: function() {
    return this.total;
  }
};



var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var obj = Object.create(queueMethods);
  obj.total = 0;
  obj.counter = 0;
  obj.inFront = 0;
  return obj;
};
