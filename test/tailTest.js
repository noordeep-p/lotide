const eqArrays = require("../eqArrays");
const tail = require('./../tail');
const assert = require('chai').assert;

describe("#tail", function() {
  it('should return [2,3] for inputs [1,2,3]', function() {
    let result = tail([1, 2, 3]);
    assert.equal(eqArrays(result, [2, 3]), true);
  });
  it('should return ["my name is", "noor"] for inputs ["hi","my name is","noor"]', function() {
    assert.equal(eqArrays(tail(["hi","my name is","noor"]), ["my name is", "noor"]) , true);
  });
  it('should return ["2", 3] for ["1", "2", 3]', function() {
    assert.equal(eqArrays(tail(["1", "2", 3]), ["2", 3]) , true);
  });
  it('should return An array with only one element and empty array should return a empty array', function() {
    assert.equal(eqArrays(tail(["1"]), []) , true);
  });
  it("should not mutate the original array", function() {
    const arr = ["Loopy", "Lighthouse", "Labs"];
    tail(arr);
    assert.equal(arr.length, 3);
  });
});