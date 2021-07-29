const assertEqual = function(actual, expected) {
  if (actual === expected) {
    let passMessage = '✅✅✅ ' + 'Assertion Passed: ' + actual + ' === ' + expected;
    return console.log(`${passMessage}`);
  } else if (actual !== expected) {
    let failMessage = '❌❌❌ ' + 'Assertion Failed: ' + '"' + actual + '"' + ' !== ' + '"' + expected + '"';
    return console.log(`${failMessage}`);
  }
};

const findKeyByValue = function(object, value) {
  let returnKey = "";
  for (const keys in object) {
    if (object[keys] === value) {
      returnKey = keys;
    } else {
      returnKey = undefined;
    }
  }
  return returnKey;
};

const bestTVShowsByGenre = {
  sci_fi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama:  "The Wire"
};

assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);