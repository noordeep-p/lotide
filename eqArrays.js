const assertEqual = function(actual, expected) {
  if (actual === expected) {
    let passMessage = '✅✅✅ ' + 'Assertion Passed: ' + actual + ' === ' + expected;
    return console.log(`${passMessage}`);
  } else if (actual !== expected) {
    let failMessage = '❌❌❌ ' + 'Assertion Failed: ' + '"' + actual + '"' + ' !== ' + '"' + expected + '"';
    return console.log(`${failMessage}`);
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

console.log(eqArrays([1, 2, 3], [1, 2, 3])); // => true
console.log(eqArrays([1, 2, 3], [3, 2, 1])); // => false

console.log(eqArrays(["1", "2", "3"], ["1", "2", "3"])); // => true
console.log(eqArrays(["1", "2", "3"], ["1", "2", 3])); // => false

assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true); // => should PASS