// Logical Operators

//Boolean (Logic) values, return true/false

//Logical AND (&&)
let a = true;
let b = false;
let logicalAnd = a && b;

console.log(logicalAnd);

const number1 = 4;
const number2 = 2;
const areBothNumbersGtThenThree = number1 > 3 && number2 > 3;

console.log('Check numbers with logical AND',areBothNumbersGtThenThree)
console.log('Check AND', 3 > 2 && -2 > 0 && '2' === 2 && 'hello' === 'hello' );

// Logical OR (||)
const logicalOr = number1 > 3 || number2 > 3;
console.log('Check numbers with logical OR', logicalOr);

console.log('Check OR', 3 > 2 || -2 > 0 || '2' === 2 || 'hello' === 'hello' );

const checkANDandOR = (3 > 2 && -2 < 0) || ('2' == 2 && 'hello' === 'hello');
console.log(checkANDandOR);

const checkLogical = (3 > 2 || -2 < 0) && ('2' === 2 || 'hello' !== 'hello');
console.log(checkLogical);

// Logical NOT (!)
// negation
// true to false

const checkWithNegation = !(number1 > 3 || number2 < -3);
const makeNegation = !checkWithNegation;

console.log('Negation', checkWithNegation);
console.log('Negation 2', makeNegation);

// Ternery operator

const ternaryCheck = number1 > 3 ? true : false;
console.log('Ternary', ternaryCheck);

const ternari1 = number1 < 3 ? true : false;
console.log('Ternary 1' ,ternari1);

const ternaryString = 4 == 4 ? 'Correct' : 'Wrong';
console.log('Ternary String' ,ternaryString);