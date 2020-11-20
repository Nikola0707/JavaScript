for(let i = 0; i < 5; i++){
    console.log(i);
}

const users = ['Tom', 'Jerry', 'Bouli'];

for(let i = 0; i < users.length; i++){
    console.log(users[i]);
}

users.unshift('Medo')

// for (variable IN object)
for (let i in users){
    console.log(users[i])
}

// for (variable OF object)
for (let i of users){
    console.log(i)
}