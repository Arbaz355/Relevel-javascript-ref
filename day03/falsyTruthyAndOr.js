// falsy values
/*
false
0
undefined
null
NaN
-0
""
*/

// short circuit with and or
const result = 1 || 23 || 12 || "Arbaz";
const result2 = 1 && "arbaz" && 12 && undefined;

undefined || {},  undefined || []

// ways to avoid the errors in javascript 
// 1) or operator and operator
// 2) optional chaining
// 3) nullish operator

const person = [
  {
    id: 0,
    name: "arbaz",
    age: 23,
  },
  {
    id: 1,
    name: "shahzad",
    age: 25,
  },
  {
    id: 2,
    name: "akash",
    age: 24,
  },
  {
    id: 3,
    name: "abhay",
    age: 21,
  },
];

const namesArray = person?.returnParams?.map((el, index, originalArray) => {
    return el.name;
})

// nullish operator - ?? -> undefined / null
const result12 = "" ?? "Arbaz";
console.log(result12);