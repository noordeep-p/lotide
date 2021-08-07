const eqArrays = require('./eqArrays');

const assertArraysEqual = function(arry1, arry2) {
  if (eqArrays(arry1, arry2)) {
    console.log('✅✅✅ ' + 'Assertion Passed: Your Arrays are equal!');
  
  } else {
    console.log('❌❌❌ ' + 'Assertion Failed: Your Arrays are not equal!');
  }
};

module.exports = assertArraysEqual;