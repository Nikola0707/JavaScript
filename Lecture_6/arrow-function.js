
const userList = [
    {
        id: 1,
        firstName: "Nikola",
        lastName: "Ristoski",
        age: 28,
        gender: "Male"
    },
    {
        id: 2,
        firstName: "Nik",
        lastName: "Ris",
        age: 80,
        gender: "Male"
    },
    {
        id: 3,
        firstName: "Bob",
        lastName: "Marley",
        age: 17,
        gender: "Male"
    }
]


const listUsers = (users) => {
    const ids = [];
    for(let i = 0; i < users.length; i++){
        ids.push(users[i].id);
    }
    return ids;
};

console.log(listUsers(userList));

const addUser = (users) => {
    const newUser = {
        id: 4,
        firstName: "Bossb",
        lastName: "Marleasy",
        age: 77,
        gender: "Male"
    }
    // const mergedData = [...users, newUser];
    // return mergedData;

    return [...users, newUser];
}

console.log(addUser(userList));