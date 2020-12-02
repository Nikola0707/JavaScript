const fetchPromise = fetch('https://ghibliapi.herokuapp.com/people');
// console.log(fetchPromise);

fetchPromise.then(response => {
    // console.log(response);
    return response.json();
}).then(people => {
    // console.log(people);
    const names = people.map(person => person.name);
    // console.log(names);

    const returnMoreThenFiveLessThenTen = people.filter((person) =>{
        const nameLength = person.name.length
        if(nameLength >= 5 && nameLength < 10){
            return person;
        }
    });
    console.log('Using Filter', returnMoreThenFiveLessThenTen);

    const peopleListForEach = [];
    people.forEach(person => {
        if(person.name.length >= 5 && person.name.length < 10){
            peopleListForEach.push(person);
        }
    });
    console.log('Using forEach', peopleListForEach);
});