const listOfNumbers = [2, 3, 5, 7, 11]; // array is a list of values, separeted with comas. 
console.log(listOfNumbers);

const listNumbersLength = listOfNumbers.length; // get the length of the array
console.log(`Length is ${listNumbersLength}`);

const getPrev = listOfNumbers[listNumbersLength - 2];
console.log('Prev', getPrev);


const friends = ['Toni', 'Moni', 'Koki', 'Dule', 'Pero', 'Tosho'];
console.log(`Friends: ${friends}`);
const getSecondItemFromList = friends[1];
console.log(getSecondItemFromList);

console.log(friends.indexOf('Tosho'));

// PUSH method adds values to the end of an array
const friendRuquests = ['Joki', 'Boki', 'Taki'];
friends.push(friendRuquests);
console.log(`Friends: ${friends}`);

friends.push(...friendRuquests);
console.log(`Friends: ${friends}`);

friends.push('None');
console.log(`Friends: ${friends}`);

// POP method remove the last element from array, and return 
friends.pop();
console.log(`Remove last element in this case is None --- ${friends}`)