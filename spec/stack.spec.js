'use strict';

var Stack = require('../lib/stack');

describe('Stack', function() {
  it('creates an empty stack', function() {
    var stack = new Stack();
    var empty = {};

    expect(stack).toEqual(jasmine.any(Stack));
    expect(stack._storage).toBe(empty);
  });
});

describe('Stack.prototype.push()', function() {
  it('adds new values to the stack', function() {
    var stack = new Stack();
    var pushed = {'foo': 'bar'};

    stack.push(pushed);

    expect(stack._storage).toBe({pushed});
  });

  it('returns the stack itself', function() {
    var stack = new Stack();
    var pushed = {'foo': 'bar'};

    expect(stack.push(pushed)).toBe(stack._storage);
  });
});

describe('Stack.prototype.pop()', function() {
  it('removes the most recently added value from the stack', function() {
    var stack = new Stack();
    var empty = {};

    stack.push(1);
    stack.pop();

    expect(stack._storage).toBe(empty);
  });

  it('returns the value removed from the stack', function() {
    var stack = new Stack();

    stack.push(1);

    expect(stack.pop()).toBe(1);
  });

  it('returns undefined when called on an empty stack', function() {
    var stack = new Stack();

    expect(stack.pop()).toBe(undefined);
  });

});
