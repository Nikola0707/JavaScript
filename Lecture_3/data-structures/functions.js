function square (x){
    const power = x * x;
    console.log(`power of x=${power}`);

    const powerPow = Math.pow(power, 2);
    console.log(`pow of powerPow=${powerPow}`);

    return powerPow
}

console.log(square(2)) // 16 

const sum = function (x, y, z){
    return (x + y) * z;
}

console.log(`Sum is ${sum(2, 3, 2)}`);


const makeNoise = function(){
    console.log('Hello World');
};
console.log(makeNoise());


const halve = function(n) {
    return n / 2;
}
console.log(halve(9.68));
console.log(halve(98));
