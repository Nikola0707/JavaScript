// Write a function which checks and count the truthy values from an array.

const valuesArray=[0, 1 ,' ', undefined, false, true];

// Output: ???

const truthyValues = (inputArray) => {
    let truthy = inputArray.filter(element => element);
    const truthyValuesLength = truthy.length;
    return `Number of Truthy values = ${truthyValuesLength} list of Trythy values: [${truthy}]`
}
console.log(truthyValues(valuesArray));