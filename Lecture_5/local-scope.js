let message = 'Hello';

function sayHello () {
  message = 'Hello Changed by sayHello';
  let sayWorld = ' World';
  const concatWords = message.concat(sayWorld);
  console.log(concatWords);
}

sayHello();

// console.log(message + sayWorld);

function greeting() {
  // local variable
  let sayWorld = 'Coders';

  console.log(message + ' ' + sayWorld);

  let greetMessage = '';
  if (sayWorld === 'Coders') {
    // block-scoped variable
    let helloMessage = 'hello';
    greetMessage = `${message} ${sayWorld} ${helloMessage}`
    console.log(greetMessage);
  }

  greetMessage = `${message} ${sayWorld} ${helloMessage}`
  console.log(greetMessage);
  // console.log(message + ' ' + sayWorld + ' ' + helloMessage);
}

greeting();