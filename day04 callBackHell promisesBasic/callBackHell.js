// call back hell

// wake up -> brush up -> breakfast -> scum meeting -> task allocation
const myMorningRoutine = () => {
  console.log("Wake up");

  setTimeout(() => {
    console.log("brush up");

    setTimeout(() => {
      console.log("breakfast");

      setTimeout(() => {
        console.log("scum meeting");

         setTimeout(() => {
           console.log("task allocation");
         }, 1000);
      }, 1000);
    }, 1000);
  }, 1000);
};

myMorningRoutine();
