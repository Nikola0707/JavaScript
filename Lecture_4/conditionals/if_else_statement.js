// const number1 = Number(prompt('Take a number'));


// if(number1 < 33){
//     console.log("true equal");
// }else{
//     console.log("false, not equal");
// }

const age = prompt("How old are you?", '');
let accessAllowed;

if(age >= 18 && age <= 35){
    accessAllowed = true;
} else{
    accessAllowed = false;
}

// alert(accessAllowed);

let message = '';

if(age < 3){
    message = 'hi, baby!';
}else if(age < 18){
    message = 'Hello';
}else if(age < 100 ){
    message = 'Greetings!';
}else{
    message = 'What an unsual age!';
}

alert(message);


