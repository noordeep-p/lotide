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

const words = ["ground", "control", "to", "major", "tom"];
const noWords = [];
const oneWord = ["noor"];

let map = function(array, callback) {
  const results = [];
  for (let item of array) {
    results.push(callback(item));
  }
  return results;
};

const itemFirstValue = item => item[0];

assertArraysEqual(map(words, itemFirstValue), [ 'g', 'c', 't', 'm', 't' ]);
assertArraysEqual(map(noWords, itemFirstValue), []);
assertArraysEqual(map(oneWord, itemFirstValue), ['n']);