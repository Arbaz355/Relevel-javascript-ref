// shallow copy, deep copy
const emp = {
  name: "arbaz",
  age: 24,
  sallery: 30000,
  address: {
    street: "street number 2",
    homeAddress: {
      homeNumber: "21",
      homeName: "Arbaz Niwas",
    },
    picode: "804408",
  },
  dob: new Date(),
};

// shallow copy

// 1) method 1 - spread operator
const empCopy = {...emp};
console.log(empCopy)

// 1) method 1 - Object.assign
const empCopy2 = Object.assign({}, emp);
console.log(empCopy2);

// deep copy

// ) method 1
const empDeepCopy = JSON.parse(JSON.stringify(emp));
console.log(empDeepCopy);

// ) method 2
const empDeepCopy2 = structuredClone(emp);
console.log(empDeepCopy2);
