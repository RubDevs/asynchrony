//Returns a promise when is called
const somethingWillHappen = () => {
  return new Promise((resolve, reject) => {
    if (true) {
      resolve("Hey!");
    } else {
      reject("Ooops");
    }
  });
};

const somethingWillHappen2 = () => {
  return new Promise((resolve, reject) => {
    if (true) {
      setTimeout(() => {
        resolve("True");
      }, 1000);
    } else {
      let error = new Error("Opps");
      reject(error);
    }
  });
};

somethingWillHappen()
  .then((response) => console.log(response))
  .catch((err) => console.error(err));

somethingWillHappen2()
  .then((response) => console.log(response))
  .catch((err) => console.error(err));

Promise.all([somethingWillHappen(), somethingWillHappen2()])
  .then((response) => {
    console.log(response);
  })
  .catch((err) => {
    console.error(err);
  });
