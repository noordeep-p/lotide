const assertArraysEqual = function(arry1, arry2) {
  if (eqArrays(arry1, arry2)) {
    console.log('✅✅✅ ' + 'Assertion Passed: Your Arrays are equal!');
  
  } else {
    console.log('❌❌❌ ' + 'Assertion Failed: Your Arrays are not equal!');
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

const without = function(source, itemsToRemove) {
  let withoutArry = [];
  for (let i = 0; i < source.length; i++) {
    if (!itemsToRemove.includes(source[i])) {
      withoutArry.push(source[i]);
    }
  }
  return withoutArry;
};

// test cases
assertArraysEqual(without([1, 2, 3], [1]), [2, 3]);
assertArraysEqual(without(["1", "2", "3"], [1, "1", "2"]), ["3"]);
assertArraysEqual(without(["1", "2", "3"], [1, "2"]), ["1","3"]);

// ensure original array is not mutated
const words = ["hello", "world", "lighthouse"];
without(words, ["lighthouse"]);
assertArraysEqual(words, ["hello", "world", "lighthouse"]);