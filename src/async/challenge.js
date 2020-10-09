//Solve the challenge with async await
let fetchData = require("../utils/fetchData");
const API = "https://rickandmortyapi.com/api/character/";

const result = async (url_api) => {
  try {
    let info = await fetchData(url_api);
    let rick = await fetchData(url_api + info.results[0].id);
    let dimension = await fetchData(rick.origin.url);
    console.log(info.info.count);
    console.log(rick.name);
    console.log(dimension.dimension);
  } catch (error) {
    console.error(error);
  }
};

result(API);
