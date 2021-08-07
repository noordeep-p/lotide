const eqArrays = require("../eqArrays");
const middle = require('./../middle');
const assert = require('chai').assert;

describe("#middle", function() {
  it('should return [] for inputs [1]', function() {
    let result = middle([1]);
    assert.equal(eqArrays(result, []), true);
  });
  it('should return [2] for inputs [1,2,3]', function() {
    assert.equal(eqArrays(middle([1,2,3]), [2]) , true);
  });
  it('should return [2,3] for [1,2,3,4]', function() {
    assert.equal(eqArrays(middle([1,2,3,4]), [2,3]) , true);
  });
  it('should return middle element with string array', function() {
    assert.equal(eqArrays(middle(["1","2","3"]), ["2"]) , true);
  });
  it("should not mutate the original array", function() {
    const arr = ["Loopy", "Lighthouse", "Labs"];
    middle(arr);
    assert.equal(arr.length, 3);
  });
});