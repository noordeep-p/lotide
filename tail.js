// assertEqual Function
const assertEqual = require('./assertEqual');

// tail function
const tail = function(input) {
  let tailArry = [];
  for (let i = 1; i < input.length; i++) {
    tailArry.push(input[i]);
  }
  return tailArry;
};

module.exports = tail;