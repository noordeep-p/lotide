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

const middle = function(array) {
  const arrayMiddle = [];
  if (array.length <= 2) {
    return [];
  } else {
    if (array.length % 2 === 0) {
      let i = (array.length / 2) - 1;
      let j = i + 1;
      arrayMiddle.push(array[i], array[j]);
    }
    if (array.length % 2 !== 0) {
      let i = Math.ceil(array.length / 2 - 1);
      arrayMiddle.push(array [i]);
    }
  }
  return arrayMiddle;
};
  
middle([1]); // => []
middle([1, 2]); // => []

assertArraysEqual(middle([1]), []);
assertArraysEqual(middle([1, 2]), []);

middle([1, 2, 3]); // => [2]
middle([1, 2, 3, 4, 5]); // => [3]

assertArraysEqual(middle([1, 2, 3]), [2]);
assertArraysEqual(middle([1, 2, 3, 4, 5]), [3]);

middle([1, 2, 3, 4]); // => [2, 3]
middle([1, 2, 3, 4, 5, 6]); // => [3, 4]

assertArraysEqual(middle([1, 2, 3, 4]), [2, 3]);
assertArraysEqual(middle([1, 2, 3, 4, 5, 6]), [3, 4]);