const { promiseTheaterIXX, promiseTheaterVGC } = require("./external.js");

// TODO: Buat fungsi promiseOutput sesuai ketentuan readme
const promiseOutput = (emotion) => {
  return new Promise((resolve, reject) => {
    if (emotion == "") {
      reject("Invalid Data!");
    } else if (emotion == "marah") {
      (async () => {
        const sumIXX = count(await promiseTheaterIXX(), emotion);
        const sumVGC = count(await promiseTheaterVGC(), emotion);

        resolve(sumIXX + sumVGC);
      })();
    } else if (emotion == "tidak marah") {
      (async () => {
        const sumIXX = count(await promiseTheaterIXX(), emotion);
        const sumVGC = count(await promiseTheaterVGC(), emotion);

        resolve(sumIXX + sumVGC);
      })();
    }
  });
};

function count(data, emotion) {
  let counter = 0;

  if (emotion == "marah") {
    for (let i = 0; i < data.length; i++) {
      if (data[i].hasil == "marah") {
        counter++;
      }
    }
  } else {
    for (let i = 0; i < data.length; i++) {
      if (data[i].hasil == "tidak marah") {
        counter++;
      }
    }
  }

  return counter;
}

module.exports = {
  promiseOutput,
};
