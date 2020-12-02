const promise1 = new Promise((resolve, reject) => {
    setTimeout(resolve, 1000, 'one');
});

const promise2 = new Promise((resolve, reject) => {
    setTimeout(resolve, 100, 'two');
});

const promise3 = new Promise((resolve, reject) => {
    setTimeout(resolve, 2000, 'three')
});

Promise.all([promise1, promise2, promise3])
.then(([result1, result2, result3]) => {
    console.log(result1);
    console.log(result2);
    console.log(result3);
})
.catch(err => console.log(err));

// Only first arrived element (promise)
Promise.race([promise1, promise2, promise3])
.then(value => console.log(value))
.catch(error => console.log(error));

// Delay promise x time
const delay = (ms) => {
    // setTimeout('hello', ms);
    return new Promise((resolve, reject) => {
        setTimeout(resolve, ms)
    });
}

delay(5000).then(()=>{
    console.log('5 second have passed!')
});