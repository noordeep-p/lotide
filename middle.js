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

module.exports = middle;