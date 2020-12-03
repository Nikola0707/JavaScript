// Calculate the sum of all element of two dimensional Array
// sum([[1, 2], [3]]) треба да врати 6.

const array = [[1, 2], [3]];

const sumOfArray = (arrayInput) => {
  let sum = 0;

  for (let i = 0; i < arrayInput.length; i++) {
    if (Array.isArray(arrayInput[i])) {
      sum += sumOfArray(arrayInput[i]);
    } else {
      sum += arrayInput[i];
    }
  }
  return sum;
};

console.log(sumOfArray(array));
