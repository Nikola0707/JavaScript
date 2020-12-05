// Get user info
let getUserInfo = sessionStorage.getItem("userInfo");
let getUserInfoParse = JSON.parse(getUserInfo);
console.log(getUserInfoParse);
// Crate elements
const createElements = (emailAddress, username, password) => {
  const userInformations = document.getElementById("userInformations");
  let showInfo = `
        <div>
            <p>Email: ${emailAddress}</p>
            <p>Username: ${username}</p>
            <p>Password: ${password}</p>
        </div>
    `;
  userInformations.innerHTML = showInfo;
};
createElements(
  getUserInfoParse.emailAddress,
  getUserInfoParse.username,
  getUserInfoParse.password
);
// Log Out
let logOut = false;
const logOutBtn = document.getElementById("logOut");
logOutBtn.addEventListener("click", (e) => {
  logOut = true;
  e.preventDefault();
  if (logOut) {
    location.href = "index.html";
  }
});
