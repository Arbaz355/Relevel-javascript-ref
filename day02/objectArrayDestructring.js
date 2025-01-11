// object destructing
const employ1 = {
  name: "arbaz",
  age: 24,
  sallery: 30000,
};

const employ2 = {
  name: "shahzad",
  age: 26,
  sallery: 40000,
};

const emp1FirstName = emp.name;
const age = emp.age;
const sallery = emp.sallery;

const {name:firstEmpName = "Viplo sir", age:firstEmpAge, sallery:firstEmpSallery} = employ1;
const {name, age, sallery} = employ2;

// array destructring
const nameList = ["arbaz", "shahzad", "asutost", "abhay"];

const emp1Name = nameList[0];
const emp2Name = nameList[1];

const [emp1Name, ...rest] = nameList;

console.log(rest);

// Object.freeze, object.seal
const newEmp = {
  name: "arbaz",
  age: 24,
  sallery: 30000,
};
Object.seal(newEmp);
newEmp.name = "shahzad";
newEmp.role = "React dev";
delete newEmp.age;

console.log(newEmp);
