// Def
const promiseToCleanTheRoom = new Promise(function(resolve, reject){    
    //cleaning the room
    let isClean = false;
    if(isClean){
        resolve({room: 'clean'});
    }else {
        reject('not clean');
    }
});

// Functions for calling in promise
const onResolver = function(fromResolve){
    const convertObjectWithStringifyResolve = JSON.stringify(fromResolve);
    console.log(`The room is ${convertObjectWithStringifyResolve}`);
}
const onRejected = function(fromReject){
    console.log(`The room is ${fromReject}`);
};
// Calling promise with functions like parameters in then() and in catch()
promiseToCleanTheRoom.then(onResolver).catch(onRejected);