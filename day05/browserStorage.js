// session storage - 5mb, local storage - 10 mb, cookies

// string values

const userDetails = {
    loginId:"1000032",
    name:"LMuser1",
    lasName:"akhter",
    firstName:"arbaz",
}

const isAllowed = false;

sessionStorage.setItem("userDetails", false);
const userData = sessionStorage.getItem("userDetails");
const parseUerData = JSON.parse(userData);

// local Storage
localStorage.setItem("userDetails", JSON.stringify(userDetails)); 
localStorage.getItem("userDetails")

 