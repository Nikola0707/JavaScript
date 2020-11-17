const hello = 'Hello World';
const hi = 'Hey there';

const stringWithNumbers = '1233455234234';

// String lenght -> the length of the string
const helloLenght = hello.length;
// ''
// ""
// ``
console.log('The lenth of the hello is', helloLenght); // 11
console.log('The length of ' + hello + ' is', helloLenght); // 11

const msg = 'The length of ' + hello + ' is ' + helloLenght;
console.log(msg);

// template string
const templateString = `The length of ${hello} is ${helloLenght}`;
console.log(templateString);

console.log(''.length); // the empty string has a length of 0
console.log(' '.length); // space => 1

const firstString = 'Hi';
const secondString = ' Hello';
console.log(firstString + secondString);


// 
const string = 'hello world, I am student at Semos Education';
console.log(string);

console.log(string.toLowerCase());
console.log(string.toUpperCase());

const concatFristAndSecondString = firstString.concat(secondString);
console.log(concatFristAndSecondString);

console.log(secondString.concat(firstString));

console.log("2020 ".concat('Hello').concat(' ').concat('World'))
console.log(''.concat(20, 20));
console.log('' + 20 + 20); // same as line 42

console.log(5 + '55');

// startsWith
const stringText = 'Hello November December';
const stringWith = 'Hello';
const checkIfStringStartsWith = stringText.startsWith(stringWith);
console.log('Starts with', checkIfStringStartsWith);

// not case sensetive
// JavaScript !== javascript 

console.log('JavaScript'.startsWith('JavaS'));


// substring string.substring(startIndex, endIndex) 
const stringText1 = 'Hello December';
// index 
// 0....N-1
// 0 = H
// 1 = e
// 2 = l
// 3 = l
// 4 = 0
// 5 = ' '
// 6 = D
// 7 = e
const subStringText1 = stringText1.substring(0);
console.log(subStringText1); // Hello December

const subStringTextBetween2and4 = stringText1.substring(2, 4);
console.log(subStringTextBetween2and4); // ll

const subStringText3 = stringText1.substring(2, 6);
console.log(subStringText3); // llo' '

const subStringText4 = stringText1.substring(4, stringText1.length - 1);
console.log(subStringText4); // o Decembe

// trim = removes whitespaces
const stringTextForTrim = '             Hello                World      ';
console.log(stringTextForTrim);
const trimmed = stringTextForTrim.trim();
console.log(trimmed);

// trimStart()
// trimEnd()


// split
const stringSplit = "hello world!, I am a student at Semos Education";
console.log(stringSplit.split());
const wordsWithSplit = stringSplit.split(' ');
console.log(wordsWithSplit);
console.log(stringSplit.split(','))

const stringSplit1 = "hello,world,I am,student,Semos";
console.log(stringSplit1);
console.log(stringSplit1.split(','));

const text = "hello world!, I am a student at Semos Education. I am Software Developer. I have more than six years exp"
const countSent = text.split('.');
console.log(countSent);
console.log('How?', countSent.length);

// slice
// str.slice(startIndex, endIndex)
const stringSlice = "hello world!, I am a student at Semos Education";
const slice = stringSlice.slice(9);
console.log(slice);
const sliceBetween = stringSlice.slice(15, 23);
console.log(sliceBetween);

const lastThreeChars = stringSlice.slice(-3);
console.log(lastThreeChars);

console.log(stringSlice.slice(-22, -2));


// includes 
// case sensitive
const textForIncludes = "hello world!, I am a student at Semos Education";
const word = 'world';
const isFound = textForIncludes.includes(word);
console.log(isFound);

// indexOf
const findWord = 'Hello World'.indexOf('Hello');
console.log(findWord); // 0 // (found)
const notFound = 'Hello World'.indexOf('hello');
console.log(notFound); // -1 (not found)

console.log('Hello World'.indexOf('World', 1)); // 6
console.log('Hello World'.indexOf('World', 7)); // -1 the value is not found