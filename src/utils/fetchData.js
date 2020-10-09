//Create instance of XMLHttpRequest
let XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;

//Function to fetch the API data
const fetchData = (url_api) => {
  return new Promise((resolve, reject) => {
    const xhttp = new XMLHttpRequest();
    //Open the connection via GET
    xhttp.open("GET", url_api, true);
    //Verify if call is ready
    xhttp.onreadystatechange = () => {
      //Verify if call is complete
      if (xhttp.readyState === 4) {
        //Verify if status is OK
        if (xhttp.status === 200) {
          //trigger callback,first parameter(error) is null cause call was ok
          //second parameter is the response parsed to JSON
          resolve(JSON.parse(xhttp.responseText));
        } else {
          //if response status is not 200 then return error
          const error = new Error("Error " + url_api);
          reject(error);
        }
      }
    };
    xhttp.send();
  });
};

module.exports = fetchData;
