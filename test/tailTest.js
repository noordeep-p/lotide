const tail = require('./../tail');
const assert = require('chai').assert;

describe("#tail", function() {
  it('should return [2,3] for inputs [1,2,3]', function() {
    let result = tail([1, 2, 3]);
    assert.deepEqual(result, [2, 3]);
  });
  it('should return ["my name is", "noor"] for inputs ["hi","my name is","noor"]', function() {
    assert.deepEqual(tail(["hi","my name is","noor"]), ["my name is", "noor"]);
  });
  it('should return ["2", 3] for ["1", "2", 3]', function() {
    assert.deepEqual(tail(["1", "2", 3]), ["2", 3]);
  });
  it('should return An array with only one element and empty array should return a empty array', function() {
    assert.deepEqual(tail(["1"]), []);
  });
  it("should not mutate the original array", function() {
    const arr = ["Loopy", "Lighthouse", "Labs"];
    tail(arr);
    assert.deepEqual(arr.length, 3);
  });
});