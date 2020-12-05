// Sign Up
const emailAddress = document.getElementById("email").value;
const username = document.getElementById("username").value;
const password = document.getElementById("password").value;
const retypePassword = document.getElementById("retypePassword").value;
const submitBtn = document.getElementById("btn");
let usersArray = [];

const newUser = () => {
  let newUser = {};
  newUser["emailAddress"] = document.getElementById("email").value;
  newUser["username"] = document.getElementById("username").value;
  newUser["password"] = document.getElementById("password").value;
  newUser["retypePassword"] = document.getElementById("retypePassword").value;

  if (newUser.password === newUser.retypePassword) {
    let getExistingUsers = JSON.parse(localStorage.getItem("users"));

    if (getExistingUsers === null) {
      usersArray.push(newUser);
      localStorage.setItem("users", JSON.stringify(usersArray));
      //   console.log('null')
    } else {
      usersArray = JSON.parse(localStorage.getItem("users"));
      usersArray.push(newUser);
      localStorage.setItem("users", JSON.stringify(usersArray));
      //   console.log('else')
    }
    alert(
      "Your Accound is created! Please enter your login informations and click Login"
    );
  } else {
    alert(`Password is not same!`);
  }
};

submitBtn.addEventListener("click", newUser);

// Log In
const usernameOrEmail = document.getElementById("usernameOrEmail");
const loginPassword = document.getElementById("loginPassword");
const loginBtn = document.getElementById("loginBtn");
let isLoggedIn = false;

const userLogin = (e) => {
  const getAllUsers = localStorage.getItem("users");
  const parseUsers = JSON.parse(getAllUsers);
  //  console.log(parseUsers);
  e.preventDefault();

  let isEqualUsernameOrEmail;
  let isEqualPassword;

  for (let i = 0; i < parseUsers.length; i++) {
    // console.log(parseUsers[i].username);
    isEqualUsernameOrEmail =
      usernameOrEmail.value === parseUsers[i].emailAddress ||
      usernameOrEmail.value === parseUsers[i].username;
    isEqualPassword = loginPassword.value === parseUsers[i].password;

    if (isEqualUsernameOrEmail && isEqualPassword) {
      isLoggedIn = true;
      let userSesionInfo = {
        emailAddress: parseUsers[i].emailAddress,
        username: parseUsers[i].username,
        password: parseUsers[i].password,
      };
      sessionStorage.setItem("userInfo", JSON.stringify(userSesionInfo));
    }
  }

  if (isLoggedIn) {
    location.href = "loggedIn.html";
  } else {
    alert("User not exist!");
  }
  console.log(isEqualUsernameOrEmail);
  console.log(isEqualPassword);
};

loginBtn.addEventListener("click", userLogin);
