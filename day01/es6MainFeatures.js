// Es-6 -> let, const
// arrow function, arrow function with return
// spread operator, rest operator 
// template literals
// forEach, map, filter, reduce

//callBack, closers, higher order function, immediately invoke javascript function
// promises -> async await

const numbers = [1, 3, 4, 5, 6];
const oddNumber = [3, 7, 9, 11];
const result = [...numbers, ...oddNumber];

const person = {
    name:"Arbaz",
    salery:12000,
}

const person2 = {
     age:20,
    ...person,
}

// rest operator
function add(a, b){
    let sum = a+b;
    
    for(let i=0; i<restParam.length; i++){
        sum+=restParam[i]
    }
    return sum;
}

// template litrals
const firstName = "Arbaz";
const lastName = "Akhter";

// const message = "my name is " + firstName + " " + lastName;
const message = my name is ${firstName} ${lastName};
// console.log(message)


// loops in javascript 
// 1) for, while, do while, 
// 2) for in, for of, forEach, map, filter, reduce, reduceRight

const marks = [12, 13, 11, 3, 4];

const doubleMarks = (arr) => {
    const result = [];
    
    // for(const index in arr){ // -> arr[i]
    //     result.push(index);
    // }
    
    arr.forEach((el) => {
        result.push(el * 2)
    })
    
    return result;
}

console.log(doubleMarks(marks))