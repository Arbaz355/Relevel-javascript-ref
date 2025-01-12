/*
Browser storage
1) session storage - 5mb, 
2) local storage - 10 mb
3) cookies
*/

// Note:- Object must be stringify before setting into browser storage
const userDetails = {
  loginId: "1000032",
  name: "LMuser1",
  lasName: "akhter",
  firstName: "arbaz",
};

const isAllowed = false;

sessionStorage.setItem("userDetails", false);
const userData = sessionStorage.getItem("userDetails");
const parseUerData = JSON.parse(userData);

// local Storage
localStorage.setItem("userDetails", JSON.stringify(userDetails));
localStorage.getItem("userDetails");
