const thawChicken = minutes =>{
    console.log('Chicken is being thawed...');

    return new Promise((resolve, reject) => {
        let isSomethingWrong = true;

        setTimeout(() => {
            if(!isSomethingWrong) {
                resolve('Thawed chicken');
            }else{
                reject(new Error('Something wrong happened!'));
            }
        }, minutes * 1000); // 3 * 1000 = 3000
    })
}

// thawChicken(3 /* seconds */).then(
//     chicken => console.log(`What we have after waiting? - ${chicken}`),
//     error => console.log(`Error message ${error.message}`)
// );

const onFulfilled = (message) => {
    console.log(`What we have after waiting? - ${message}`)
}
const onRejected = (error) => {
    console.log(`Error message ${error.message}`);
}
thawChicken(8).then(onFulfilled).catch(onRejected);

