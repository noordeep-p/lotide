const assertArraysEqual = function(arry1, arry2) {
  if (eqArrays(arry1, arry2) === true) {
    return console.log('✅✅✅ ' + 'Assertion Passed: Your Arrays are equal!');
  
  } else if (eqArrays(arry1, arry2) === false) {
    return console.log('❌❌❌ ' + 'Assertion Failed: Your Arrays are not equal');
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

const without = function(arry1, arry2) {
  const withoutArry = [];
  for (let i = 0; i < arry1.length; i++) {
    let remove;
    for (let j = 0; j < arry2.length; j++) {
      if (arry1[i] === arry2[j]) {
        remove = true;
      }
    }
    if (!remove) {
      withoutArry.push(arry1[i]);
    }
  }
  return withoutArry;
};

// const without = function(source, itemsToRemove) {
//   let withoutArry = [];
//   for (let i = 0; i < source.length; i++) {
//     if (!itemsToRemove.includes(source[i])) {
//       withoutArry.push(source[i]);
//     }
//   }
//   return withoutArry;
// };

console.log(without([1, 2, 3], [1])); // => [2, 3]
console.log(without(["1", "2", "3"], [1, "1", "2"])); // => ["1", "2"]

const words = ["hello", "world", "lighthouse"];
without(words, ["lighthouse"]); // no need to capture return value for this test case
// Make sure the original array was not altered by the without function
assertArraysEqual(words, ["hello", "world", "lighthouse"]);