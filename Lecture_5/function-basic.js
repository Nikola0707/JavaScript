// console.log('Lecture 5');


function nameOfFunction () {
    // block scope function
  }
  
  // sayHi
  // addNumbers
  // getPeople
  // getProducts
  // listOfProjects
  
  // regular function
  
  function greetings() {
    // code
    console.log('Hello there');
    return 'hi'
  }
  
  console.dir(greetings);
  greetings();
  const greetingCopy = greetings(); 
  console.log(greetingCopy);
  
  function showMessage() {
    const message = 'Hello, I am JavaScript local variable';
    const finalMessege = `Hey ${message}`;
    console.log(finalMessege);
  }
  
  // console.log(message); 
  showMessage();
  
  let outerVariable = 'John';
  
  function showOuterMessage() {
    const message = `Hello, ${outerVariable}`;
    console.log(message);
    outerVariable = 'John Updated';
    const modifyMessage = `Hello, modified ${outerVariable}`;
    console.log(modifyMessage);
  }
  
  showOuterMessage();
  
  
  let outerName = 'John';
  
  function showMessageA() {
    let outerName = 'Todor'; // 
    const message = `Hello, ${outerName}`;
    console.log(message);
  }
  
  showMessageA();
  
  
  function greetingsWithParam(name) {
    console.log(`${name} Hello there`)
  }
  
  greetingsWithParam(125442, 'djdjsjs');
  
  console.log(name);
  
  
  function speak(name, time) {
    console.log(`${time} - ${name} Hello there`);
  }
  
  const speaking = speak('James', 3);
  
  function speak(name = 'Jenifer', time = '333') {
    console.log(`${time} - ${name} Hello there`);
    // console.log(time + ' - ' + name + ' Hello there');
  }
  
  speak();
  speak('Ana');
  speak('Jana', 514);
  
  const squareOfNumber = function (num) {
    return num ** 2;
  };
  
  console.log(squareOfNumber(4));
  
  const calcSquare = squareOfNumber(5);
  console.log(calcSquare);