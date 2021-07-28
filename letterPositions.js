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

const assertArraysEqual = function(arry1, arry2) {
  if (eqArrays(arry1, arry2)) {
    console.log('✅✅✅ ' + 'Assertion Passed: Your Arrays are equal!');
  
  } else {
    console.log('❌❌❌ ' + 'Assertion Failed: Your Arrays are not equal!');
  }
};

const letterPositions = function(sentence) {
  const results = {};
  for (let i = 0; i < sentence.length; i++) {
    if (sentence[i] !== " ") {
      if (results[sentence[i]]) {
        results[sentence[i]].push(i);
      } else {
        results[sentence[i]] = [];
        results[sentence[i]].push(i);
      }
    }
  }
  return results;
};

assertArraysEqual(letterPositions("hello").e, [1]);
console.log(letterPositions("lighthouse in the house"));