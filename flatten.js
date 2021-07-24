const flatten = function(array) {
  const flatArry = [];
  for (let i = 0; i < array.length; i++) {
    if (Array.isArray(array[i])) {
      for (const elements of array[i]) {
        flatArry.push(elements);
      }
    } else {
      flatArry.push(array[i]);
    }
  }
  return flatArry;
};

console.log(flatten([1, 2, [3, 4], 5, [6]])); // => [1, 2, 3, 4, 5, 6]
