'use strict';

var Stack = function Stack () {
  this._size = 0;
  this._storage = {};
};

Stack.prototype.push = function push (value) {
  // increment size counter
  // add value to storage
};

Stack.prototype.pop = function pop () {
  var size = this._size;
  var deletedData;

  // remove newest value from storage and decrement size counter, only if data
  // exists
  if (size) {
    deletedData = this._storage[size];

    delete this._storage[size];
    this._size--;

    return deletedData;
  }
};

module.exports = Stack;
