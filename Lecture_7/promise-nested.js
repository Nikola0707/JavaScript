const cleanRoom = () => {
    return new Promise((resolve, reject) => {
        resolve('cleaned the room');
    });
};

const removeGarbage = (message) => {
    return new Promise((resolve, reject) => {
        resolve(`${message} remove Garbage`);
    });
};

const winVideoGame = (message) => {
    return new Promise((resolve, reject) => {
        resolve(`${message} won Video Game!`);
    })
};

cleanRoom()
.then((resultFromCleanRoom) => {
    return removeGarbage(resultFromCleanRoom);
})
.then((resultFromRemoveGarbadge) => {
    return winVideoGame(resultFromRemoveGarbadge);
})
.then((resultFromWinVideoGame) => {
    console.log(`finished ${resultFromWinVideoGame}`)
})