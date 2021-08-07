// assertEqual Function
const assertEqual = require('./assertEqual');

// head Function
const head = function(input) {
  return input[0];
};

// Test Case 1: Check the returned array elements
assertEqual(head([1]), 1);
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");