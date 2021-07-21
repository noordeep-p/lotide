// assertEqual Function
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    let passMessage = '✅✅✅ ' + 'Assertion Passed: ' + actual + ' === ' + expected;
    return console.log(`${passMessage}`);
  } else if (actual !== expected) {
    let failMessage = '❌❌❌ ' + 'Assertion Failed: ' + '"' + actual + '"' + ' !== ' + '"' + expected + '"';
    return console.log(`${failMessage}`);
  }
};

// head Function
const head = function(input) {
  return input[0];
};

assertEqual(head([1]), 1);
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");