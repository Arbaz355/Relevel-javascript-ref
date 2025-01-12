// hard coded dummy api response data
const responseData = [
  {
    name: "Arbaz",
    role: "react dev",
    age: 12,
  },
  {
    name: "Akash",
    role: "full stack dev",
    age: 22,
  },
  {
    name: "Shahzad ji",
    role: "java dev",
    age: 32,
  },
];

const AUTH_TOKEN = "kadgaksgd123123";

const apiCalling = new Promise((resolve, reject) => {
  if (AUTH_TOKEN) {
    resolve(responseData);
  } else {
    reject("User is not allowed");
  }
});

// .then().catch() => using promises
apiCalling.then((res) => console.log(res)).catch((err) => console.error(err));

// -> async await arrow function syntax
const fetchData = async () => {
  try {
    const response = await apiCalling;
    const data = await response.json();
    console.log(data);
  } catch (err) {
    console.error(`An unknown error occurred ${err}`);
  }
};

// -> normal function async syntax
async function fetchData() {
  try {
    const response = await apiCalling;
    console.log(resposne);
  } catch (err) {
    console.error(`An unknown error occurred ${err}`);
  }
}

fetchData();

// different type of console function
/*1) console.log - ordinary console used for debugging and print statement
  2) console.table - console with formatted data in tabular structure
  3) console.error - console data with error highlighted in red color
  4) console.warn - console with warning highlight in yellow color
 */
