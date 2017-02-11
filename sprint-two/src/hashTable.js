

var HashTable = function() {
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
};

HashTable.prototype.insert = function(k, v) {
  // get the location of the cell of k
  var index = getIndexBelowMaxForKey(k, this._limit);
  // check if the cell has a bucket already
  if (!Array.isArray(this._storage.get(index))) {
    // if not create the bucket and tuple inside with k v pair 
    this._storage.set(index, [[k, v]]);
  } else {
    // get bucket
    var bucket = this._storage.get(index);
    // for each tuple in bucket
    for (var i = 0; i < bucket.length; i++) {
      // if key exists in current tuple
      if (bucket[i][0] === k) {
        // overwrite tuple value
        bucket[i][1] = v;
      } else if (i === (bucket.length - 1)) {
        // else if current tuple is last one  
        // concat new tuple onto current bucket 
        var newBucket = this._storage.get(index).concat([[k, v]]);
        // set cell to conatin new bucket
        this._storage.set(index, newBucket);
      }
    }
  }
};

HashTable.prototype.retrieve = function(k) {
  // get the location of the cell of k
  var index = getIndexBelowMaxForKey(k, this._limit);
  // pull out bucket at given cell 
  var bucket = this._storage.get(index);
  // if bucket is an array 
  if (Array.isArray(bucket)) {
    // for each tuple in the bucket 
    for (var i = 0; i < bucket.length; i ++) {
      var tuple = bucket[i];
      // if the key of current tuple matches k
      if (tuple[0] === k) {
        // return value 
        return tuple[1];
      }
    }
  }
  // if we don't find k return undefined
  return undefined;

  // var ans;
  // this._storage.each(function(item, i) {
  //   console)
  //   if (item[i][0] === k) {
  //     ans = item[i][0];
  //     console.log(ans);
  //   }
  // });
  // return ans;
};

HashTable.prototype.remove = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  this._storage.set(index, undefined);
};



/*
 * Complexity: What is the time complexity of the above functions?
 */