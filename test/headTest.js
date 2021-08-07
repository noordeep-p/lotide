const head = require('./../head');
const assert = require("chai").assert;

describe("#head", function() {
  it("should return 1 for [1,1,1]", function() {
    assert.strictEqual(head([1,1,1]), 1);
  });
  it("returns '5' for ['5']", () => {
    assert.strictEqual(head(['5']), '5');
  });
});