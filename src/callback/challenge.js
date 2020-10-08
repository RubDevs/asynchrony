//Create instance of XMLHttpRequest
let XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;

const API = "https://rickandmortyapi.com/api/character/";

//Function to fetch the API data
function fetchData(url_api, callback) {
  let xhttp = new XMLHttpRequest();
  //Open the connection via GET
  xhttp.open("GET", url_api, true);
  //Verify if call is ready
  xhttp.onreadystatechange = function (event) {
    //Verify if call is complete
    if (xhttp.readyState === 4) {
      //Verify if status is OK
      if (xhttp.status === 200) {
        //trigger callback,first parameter(error) is null cause call was ok
        //second parameter is the response parsed to JSON
        callback(null, JSON.parse(xhttp.responseText));
      } else {
        //if response status is not 200 then return error
        const error = new Error("Error " + url_api);
        return callback(error, null);
      }
    }
  };
  xhttp.send();
}

fetchData(API, function (error1, data1) {
  if (error1) return console.error(error1);
  fetchData(API + data1.results[0].id, function (error2, data2) {
    if (error2) return console.error(error2);
    fetchData(data2.origin.url, function (error3, data3) {
      if (error3) return console.error(error3);
      console.log(data1.info.count);
      console.log(data2.name);
      console.log(data3.dimension);
    });
  });
});
