// console.log(text);
// var text;

// console.log(textName);
// var textName;

// numberX = 55;
// console.log(numberX);
// var numberX;

// var numberY;
// numberY = 60;
// console.log(numberY);

// console.log(numA);
// var numA = 70;

var numB = 44;

// function printNumber() {
//   textHello = 'hello';
//   console.log(textHello); // hello
//   var textHello;
// }

// printNumber(); // hello
// console.log(textHello); // textHello is not defined

// sayHelloMessage = 'hello';
// console.log(sayHelloMessage);
// let sayHelloMessage;

speak();

function speak() {
  console.log('Hey, there');
}

// speakExpression();

const speakExpression = function () {
  console.log('Hi there, I am expression');
};


// arrow func declaration

const arrowFunctionDeclaration = () => {
  console.log('Hi there, I am arrow func');
};

arrowFunctionDeclaration();

// function printName(name) {
//   return `Hello ${name}`;
// }

// console.log(printName('Test'));

// const printName = (name) => {
//   return `Hello ${name} using arrow function`;
// }

const printName = name => `Hello ${name} using arrow function`;

const name = printName(`Arrow name`)
console.log(name);


const printUsers = (users) => {
  // users.forEach(function(user, index) {
  //   console.log(`${index} - ${user}`);
  // });
  users.forEach((user, index) => {
    console.log(`${index} - ${user}`);
  })
}

const users = ['John', 'Bob', 'Foo', 'Mark'];
const printUser = printUsers(users);