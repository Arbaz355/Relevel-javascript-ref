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

// console.log, console.table, console.error, console.warn
// .then().catch() => using promises
apiCalling.then((res) => console.log(res)).catch((err) => console.error(err));

// async await -> arrow function
const fetchData = async () => {
  try {
    const resposne = await apiCalling;
    const data = await resposne.json()
    console.log(data);
  } catch (err) {
    console.error(`An unknow error occured ${err}`);
  }
};

// -> normal function async syntax
async function fetchData() {
  try {
    const resposne = await apiCalling;
    console.log(resposne);
  } catch (err) {
    console.error(`An unknow error occured ${err}`);
  }
}

fetchData();
