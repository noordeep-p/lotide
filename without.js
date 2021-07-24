const without = function(arry1, arry2) {
  let withoutArry = [];
  for (let i = 0; i < arry2.length; i++) {
    withoutArry = [];
    for (let j = 0; j < arry1.length; j++) {
      if (arry2[i] !== arry1[j]) {
        withoutArry.push(arry1[j]);
      }
    }
  }
  return withoutArry;
};

console.log(without([1, 2, 3], [1])); // => [2, 3]
console.log(without(["1", "2", "3"], [1, 2, "3"])); // => ["1", "2"]