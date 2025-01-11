// promises -> pending -> resolve / reject
const evenNumberPromise = new Promise((resolve, reject) => {
  const number = 5;

  setTimeout(() => {
    if (number % 2 == 0) {
      resolve("Given number is even");
    } else {
      reject("Given number is odd! not even");
    }
  }, 3000);
});

evenNumberPromise
  .then((res) => console.log(res))
  .catch((err) => console.error(err))
  .finally(() => console.log("He he everything is done"));

const myMorningRoutine = new Promise((resolve, reject) => {
  resolve("Wake up");
});

myMorningRoutine
  .then((res) => console.log(res))
  .then(() => {
    setTimeout(() => {
      console.log("brush up");
    }, 1000);
  })
  .then(() => {
    setTimeout(() => {
      console.log("breakfast");
    }, 1000);
  })
  .catch((err) => console.log(err));
