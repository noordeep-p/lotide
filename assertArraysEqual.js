const assertArraysEqual = function(arry1, arry2) {
  if (eqArrays(arry1, arry2) === true) {
    return '✅✅✅ ' + 'Assertion Passed: Your Arrays are equal!';
  
  } else if (eqArrays(arry1, arry2) === false) {
    return '❌❌❌ ' + 'Assertion Failed: Your Arrays are not equal!';
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

console.log(assertArraysEqual([1, 2, 3], [1, 2, 3])); // => true
console.log(assertArraysEqual([1, 2, 3], [3, 2, 1])); // => false

console.log(assertArraysEqual(["1", "2", "3"], ["1", "2", "3"])); // => true
console.log(assertArraysEqual(["1", "2", "3"], ["1", "2", 3])); // => false