var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var obj = {};
  obj.counter = 0;
  obj.total = 0;
  _.extend(obj, queueMethods);
  return obj;
};
var queueMethods = {
  enqueue: function(value) {
    this.counter++;
    this.total++;
  },
  dequeue: function() {
    this.total--;
  },
  size: function() {
    return this.total < 0 ? 0 : this.total;
  }
};