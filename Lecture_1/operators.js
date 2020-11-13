// Assigment operator
 const hasBook = true;


 // Aritmetic operators
//  + (addition) a + b
//  - (subtraction) a - b
//  * (multiplication) a * b
//  / (devision) a / b
//  % (remainder) a % b
// ** (expnent) 5 ** 2 (return 25, as 5 * 5)

const firstName = "Nikola";
const lastName = "Ristoski";

const name = firstName + " " + lastName;

console.log(name);

const numberA = 25;
const numberB = 15;
const numberC = 20.55;
const numberD = 150;

const sum = numberA + numberB + numberC + numberD;
console.log(sum);

const diff = numberA - numberD;
console.log(diff);

const multi = numberB * numberC;
console.log(multi);

const remainder = numberD % numberC;
console.log(remainder);

const exponent = 5 ** 2;
console.log(exponent);

// Comparison operaors

// < (less than)
// > (greater than)
// <= (less than or equal to)
// >= (greater than or equal to)
// == (both values are same like 15 == "15" = true) 
// === (both values are same but different type, like 15 == "15" = false)
// !== (strict non equaity)

const lessThan = numberA < numberB;
console.log(lessThan);

const greaterThan = numberA > numberB;
console.log(greaterThan);

const lessOrEqualTo = numberA <= numberD;
console.log(lessOrEqualTo);

const bothEqual = 15 == numberB;
console.log(bothEqual);

const strictEquality = "15" === numberB;
console.log(strictEquality);


const check = numberA !== 25;
console.log(check);

const checkTypeAndValue = numberA !== '25';
console.log(checkTypeAndValue);