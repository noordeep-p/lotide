const tail = require('./../tail');
const assertEqual = require('./../assertEqual');

// Test Case 1: Check the returned array elements
const result = tail(["Hello", "Lighthouse", "Labs"]);
assertEqual(result.length, 2); // ensure we get back two elements
assertEqual(result[0], "Lighthouse"); // ensure first element is "Lighthouse"
assertEqual(result[1], "Labs"); // ensure second element is "Labs"

// Test Case 2: An array with only one element and empty array should return a empty array
const result2 = tail([]);
const result3 = tail([1]);
assertEqual(result2.length, 0); // ensure the lenght of array is 0
assertEqual(Array.isArray(result2), true); // ensure a array is returned
assertEqual(result3.length, 0); // ensure the lenght of array is 0
assertEqual(Array.isArray(result3), true); // ensure a array is returned

// Test Case 3: Check the original array
const words = ["Loopy", "Lighthouse", "Labs"];
tail(words); // no need to capture the return value since we are not checking it
assertEqual(words.length, 3); // original array should still have 3 elements!