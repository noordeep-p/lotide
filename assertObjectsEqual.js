const assertObjectsEqual = function(object1, object2) {
  const inspect = require('util').inspect;
  if (eqObjects(object1, object2)) {
    return console.log(`✅✅✅ Assertion Passed: ${inspect(object1)} === ${inspect(object2)}`);
  } else {
    return console.log(`❌❌❌ Assertion Failed: ${inspect(object1)} !== ${inspect(object2)}`);
  }
};

const eqArrays = function(arry1, arry2) {
  const eqValues = [];
  if (arry1.length === arry2.length) {
    for (let i = 0; i < arry1.length; i++) {
      if (arry1[i] === arry2[i]) {
        eqValues.push(1);
      }
    }
  }
  if (eqValues.length === arry1.length) {
    return true;
  } else {
    return false;
  }
};

const eqObjects = function(object1, object2) {
  let equalKeyValues = 0;
  if (Object.keys(object1).length === Object.keys(object2).length) {
    for (const key1 in object1) {
      for (const key2 in object2) {
        if (Array.isArray(object1[key1]) && Array.isArray(object2[key2])) {
          if (eqArrays(object1[key1], object2[key2])) {
            equalKeyValues += 1;
          }
        } else if (object1[key1] === object2[key2]) {
          equalKeyValues += 1;
        }
      }
    }
  }
  if (Object.keys(object1).length === equalKeyValues) {
    return true;
  } else {
    return false;
  }
};

const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
assertObjectsEqual(cd, dc); // => true

const cd2 = { c: "1", d: ["2", 3, 4] };
assertObjectsEqual(cd, cd2); // => false

const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
assertObjectsEqual(ab, ba); // => true

const abc = { a: "1", b: "2", c: "3" };
assertObjectsEqual(ab, abc); // => false