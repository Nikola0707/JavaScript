/* Ne mi vrakja dobra vrednost maxValue na test case 1, odnosno dava 
Input (stdin) 7 69 2 221 8974
Your Output (stdout)  299 9266
Expected Output 299 9271
*/

/* Za minValue ok i go dava deka e tochno 
Input (stdin) 1 2 3 4 5
Your Output (stdout)  10 14
Expected Output 10 14
*/

'use strict';

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => {
    inputString += inputStdin;
});

process.stdin.on('end', _ => {
    inputString = inputString.replace(/\s*$/, '')
        .split('\n')
        .map(str => str.replace(/\s*$/, ''));

    main();
});

function readLine() {
    return inputString[currentLine++];
}

// Complete the miniMaxSum function below.
function miniMaxSum(arr) {    
    let minValueSlice = arr.slice(0, 4);
    let maxValueSlice = arr.slice(1, 5);   
    
    let minValue = minValueSlice.reduce((minValueSum, nextNumber) => {
        return minValueSum += nextNumber;
    }, 0);
    
    let maxValue = maxValueSlice.reduce((maxValueSum, maxNextNumber) => {
        return maxValueSum += maxNextNumber;
    }, 0);
    
    let minMax = console.log(minValue, maxValue);
    return minMax;
}

function main() {
    const arr = readLine().split(' ').map(arrTemp => parseInt(arrTemp, 10));

    miniMaxSum(arr);
}
