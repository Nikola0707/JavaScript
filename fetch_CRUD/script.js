const url = "https://jsonplaceholder.typicode.com/users";
// Get all informations
const fetchApi = (apiLink) => {
  fetch(apiLink)
    .then((response) => response.json())
    .then((json) => console.log(json));
};

// User object for creating new user
const user = {
  id: 11,
  name: "Nikola Ristoski",
  email: "ristoski.nikola@gmail.com",
  address: {
    street: "Makedonija",
    suite: "Apt. 3/00",
    city: "Skopje",
    zipcode: "1000",
    "geo:": {
      lat: "41.9981",
      lng: "21.4254",
    },
  },
  phone: "070-790/050",
  website: "ristoski.com",
  company: {
    name: "Corona",
    catchPhrase: "Do what is great!",
    bs: "xxx",
  },
};

// POST request for creating element to API
const createElementToApi = (user) => {
  fetch(url, {
    method: "POST",
    body: JSON.stringify({
      id: 11,
      name: `${user.name}`,
      email: `${user.email}`,
      address: {
        street: `${user.street}`,
        suite: `${user.suite}`,
        city: `${user.city}`,
        zipcode: `${user.zipcode}`,
        "geo:": {
          lat: `${user.lat}`,
          lng: `${user.lng}`,
        },
      },
      phone: `${user.phone}`,
      website: `${user.website}`,
      company: {
        name: `${user.company.name}`,
        catchPhrase: `${user.company.catchPhrase}`,
        bs: `${user.company.bs}`,
      },
    }),
    headers: {
      "Content-type": "application/json",
    },
  })
    .then((response) => response.json())
    .then((json) => console.log(json));
};
createElementToApi(user);

// Updating user using PUT

// Object for updating
const userUpdateInfo = {
  id: 11,
  name: "Nikola ",
  email: "ristoski.nikola@gmail.",
  address: {
    street: "Makedonija",
    suite: "Apt. 3/",
    city: "Skopje",
    zipcode: "1000",
    "geo:": {
      lat: "41.",
      lng: "21.",
    },
  },
  phone: "070-/050",
  website: "riski.com",
  company: {
    name: "Coa",
    catchPhrase: "Do great!",
    bs: "xxx",
  },
};
// Vo Network Request payload gi gledam informaciite od objektot userUpdateInfo no vo consola mi dava greshka
// script.js:93 PUT http://127.0.0.1:5500/url/11 net::ERR_ABORTED 405 (Method Not Allowed)
const updateUserInformations = (userUpdate) => {
  fetch(`url/${userUpdate.id}`, {
    method: "PUT",
    body: JSON.stringify({
      id: 11,
      name: `${userUpdate.name}`,
      email: `${userUpdate.email}`,
      address: {
        street: `${userUpdate.street}`,
        suite: `${userUpdate.suite}`,
        city: `${userUpdate.city}`,
        zipcode: `${userUpdate.zipcode}`,
        "geo:": {
          lat: `${userUpdate.lat}`,
          lng: `${userUpdate.lng}`,
        },
      },
      phone: `${userUpdate.phone}`,
      website: `${userUpdate.website}`,
      company: {
        name: `${userUpdate.company.name}`,
        catchPhrase: `${userUpdate.company.catchPhrase}`,
        bs: `${userUpdate.company.bs}`,
      },
    }),
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  })
    .then((response) => response.json())
    .then((json) => console.log(json));
};
updateUserInformations(userUpdateInfo);

// Delete user
const deleteUser = (userId) => {
    fetch(`url/${userId}`, {
        method: 'DELETE'
    })
};

deleteUser(11)

