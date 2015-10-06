'use strict';

var Stack = function Stack () {
  this._size = 0;
  this._storage = {};
};

Stack.prototype.push = function push (value) {
  // add value to storage
  // increment size counter
};

Stack.prototype.pop = function pop () {
  // remove newest value from storage, only if data exists
  // decrement size counter, only if data exists
};

