// Напишете фунција која што даден текст ќе треба текст карактерите да ги конвертира во ascii code, и обратно
// ascii codes да ги конвертира во текст карактери. Решението ќе треба да биде напишано со regular function, 
// callbacks и promises, соодветно (тоест сите треба да бидат засебни, а не комбинација).

// Test Cases кои треба да бидат задоволени (ВНИМАТЕЛНО анализирајте што се бара, ТРЕБА сите начини да бидат исполнети).

// Input:
// string1 = "javascript";
// Output:
// string1Converted = "74971189711599114105112116";

// Input:
// string2 ="74971189711599114105112116"
// Output:
// string2Converted = "javascript";

// Input:
// string3 = "j97va11599ri112116";
// Output:
// string3Converted = "74a11897sc114105pt";


let string1 = "javascript";
let string2 = "106971189711599114105112116";
let string3 = "J97va11599ri112116";

const asciiToTextAndTextToAscii = (input) => {
    let result;
    let letter = /^[a-zA-Z ._-]*$/;
    let digits = /^[0-9]*$/;

    if (input.match(letter)) {
        // if input contains only letters
        let array = [];
        for (let i = 0; i < input.length; i++) {
          const lettersPush = input.charCodeAt(i);
          array.push(lettersPush);
        }
        result = array.join("");
        return `This input - ${input} converted to ascii code is - ${result}`;
    } else if (input.match(digits)) {
        // if input contains only numbers
        let arrayAscii = [];
        for (let i = 0; i < input.length; ) {
          const number = input[i] === "1" ? 3 : 2;
          const pushToArray = input.substr(i, number);
          arrayAscii.push(pushToArray);
          i += number;
        }
        const convertetToString = String.fromCharCode(...arrayAscii);
        result = convertetToString;
        return `This input - ${input} converted to text is - ${result}`;
    } else {
      // Letters to numbers
      const finalArray = [];
      for (let i = 0; i < input.length; i++) {
        if (input[i].match(letter)) {
          let letterToNumber = input.charCodeAt(i);
          finalArray.push(letterToNumber);
          // console.log(finalArray)
        } else {
          const numberOfDigits = input[i] === "1" ? 3 : 2;
          const pushToArray = String.fromCharCode(Number(input.substr(i, numberOfDigits)));   
          finalArray.push(pushToArray);
          // console.log(`Final array ${finalArray}`);
          i += numberOfDigits - 1;
        }
      }
       return `This input - ${input} converted to ascii code is - ${finalArray.join("")}`;     
      
    }
};
console.log(asciiToTextAndTextToAscii(string1));
console.log(asciiToTextAndTextToAscii(string2));
console.log(asciiToTextAndTextToAscii(string3));

