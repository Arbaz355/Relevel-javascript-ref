const API_URL = "https://jsonplaceholder.typicode.com/posts";

// javascript browser supported fetch with additional parameters
/* fetch => fetch(API_URL, {
  method:"GET",  -> GET. POST, DELETE, PUT, PATCH 
  body:JSON.stringify({})
})
*/

// api call with promises implementation
const fetchDataWithPromises = () => {
  fetch(API_URL)
    .then((res) => res.json())
    .then((data) => console.log(data))
    .catch((err) => console.error(err));
};

// api call with modern async await syntax
const fetchDataWithAsyncAwait = async () => {
  try {
    const response = await fetch(API_URL);
    const data = await response.json();
    console.log(data);
  } catch (err) {
    console.log(`An error occured ${err}`);
  }
};

fetchDataWithPromises();
fetchDataWithAsyncAwait();