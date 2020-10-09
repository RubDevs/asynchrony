//Solve the challenge of requesting characters from Rick and Morty API using promises
//Then request the fisrt character and then his dimension
let fetchData = require("../utils/fetchData");
const API = "https://rickandmortyapi.com/api/character/";

fetchData(API)
  .then((response) => {
    fetchData(API + response.results[0].id)
      .then((response2) => {
        fetchData(response2.origin.url)
          .then((response3) => {
            console.log(response.info.count);
            console.log(response2.name);
            console.log(response3.dimension);
          })
          .catch((err) => console.error(err));
      })
      .catch((err) => console.error(err));
  })
  .catch((err) => console.error(err));
