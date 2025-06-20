var filterCarsPromise = require('./promise3.js')

// Kondisi 1: mobil berwarna hitam tahun 2019 (menggunakan Promise .then().catch())
filterCarsPromise("black", 2019)
  .then(cars => {
    console.log("Mobil hitam tahun 2019:", cars);
  })
  .catch(error => {
    console.log("Error:", error.message);
  });

// Kondisi 2: mobil berwarna silver tahun 2017 (menggunakan Promise .then().catch())
filterCarsPromise("silver", 2017)
  .then(cars => {
    console.log("Mobil silver tahun 2017:", cars);
  })
  .catch(error => {
    console.log("Error:", error.message);
  });

// Kondisi 3, 4, 5: menggunakan async/await

async function processCarFilters() {
  // Kondisi 3: mobil berwarna abu-abu tahun 2019
  try {
    const greyCars2019 = await filterCarsPromise("grey", 2019);
    console.log("Mobil abu-abu tahun 2019:", greyCars2019);
  } catch (error) {
    console.log("Error:", error.message);
  }

  // Kondisi 4: mobil berwarna abu-abu tahun 2018
  try {
    const greyCars2018 = await filterCarsPromise("grey", 2018);
    console.log("Mobil abu-abu tahun 2018:", greyCars2018);
  } catch (error) {
    console.log("Error:", error.message);
  }

  // Kondisi 5: mobil berwarna hitam tahun 2020
  try {
    const blackCars2020 = await filterCarsPromise("black", 2020);
    console.log("Mobil hitam tahun 2020:", blackCars2020);
  } catch (error) {
    console.log("Error:", error.message);
  }
}

// Panggil fungsi async
processCarFilters();