// map, reduce, filter, setTimeOut, setInterval, find, reduceRight, every, some

function add(a) { //-> higher order function
    return function(b){ //-> callback
        return a+b;
    }
}

function doubleNumber(num){
    return num *2;
}

const numbers = [12, 14, 15, 16, 18];
const result12 = numbers.map((el) => el*2);

const lessThan15 = numbers.filter((el) => el < 15);

setTimeout(()=> {
    console.log("Hello world")
}, 2000) //mill second

setInterval(() => {
    console.log("I am dumb");
}, 100)

const result = add(2)(3);
console.log(lessThan15);