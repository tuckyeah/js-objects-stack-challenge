'use strict';

// Allow chai syntax like `expect(foo).to.be.ok;`
// jshint -W030

const chai = require('chai');
const expect = chai.expect;

const Stack = require('../lib/stack');

describe('Stack', function () {
  it('creates an empty stack', function () {
    const stack = new Stack();
    const empty = {};

    expect(stack).to.be.an.instanceof(Stack);
    expect(stack._storage).to.deep.equal(empty);
  });

  xit('creates a stack containing the arguments', function () {
    const stack = new Stack('a', 'b', 'c');
    const storage = {
      0: 'a',
      1: 'b',
      2: 'c',
    };

    expect(stack._storage).to.deep.equal(storage);
  });
});

describe('Stack.prototype.push()', function () {
  it('adds new values to the stack', function () {
    const stack = new Stack();
    const pushed = {
      foo: 'bar',
    };

    stack.push(pushed);

    expect(stack._storage).to.deep.equal({
      0: pushed,
    });
  });

  xit('returns the stack itself', function () {
    const stack = new Stack();
    const pushed = {
      foo: 'bar',
    };

    expect(stack.push(pushed)).to.deep.equal(stack);
  });
});

describe('Stack.prototype.pop()', function () {
  it('removes the most recently added value from the stack', function () {
    const stack = new Stack();
    const empty = {};

    stack.push(1);
    stack.pop();

    expect(stack._storage).to.deep.equal(empty);
  });

  it('returns the value removed from the stack', function () {
    const stack = new Stack();

    stack.push(1);

    expect(stack.pop()).to.equal(1);
  });

  it('returns undefined when called on an empty stack', function () {
    const stack = new Stack();

    expect(stack.pop()).to.be.undefined;
  });
});
