//Solve the challenge of requesting characters from Rick and Morty API using promises
//Then request the fisrt character and then his dimension
let fetchData = require("../utils/fetchData");
const API = "https://rickandmortyapi.com/api/character/";

fetchData(API)
  .then((response) => {
    console.log(response.info.count);
    return fetchData(API + response.results[0].id);
  })
  .then((response) => {
    console.log(response.name);
    return fetchData(response.origin.url);
  })
  .then((response) => {
    console.log(response.dimension);
  })
  .catch((err) => console.error(err));
