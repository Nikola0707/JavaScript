// Input:
// checkSimilarity([1,2,3,4], [1,2,5])
// Output
// [1,2]
const one = [1, 2, 3, 4];
const two = [1, 2, 5];

const checkSimilarity = (arrayOne, arrayTwo) => {
  const newArray = [];
  arrayOne.forEach((elementOne) =>
    arrayTwo.forEach((elementTwo) => {
      if (elementOne === elementTwo) {
        newArray.push(elementOne);
      }
    })
  );
  return newArray;
};
console.log(checkSimilarity(one, two));
