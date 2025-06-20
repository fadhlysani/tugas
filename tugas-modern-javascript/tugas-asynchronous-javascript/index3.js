var filterBooksPromise = require('./promise2.js')

// Kondisi 1: bukunya berwarna dan jumlah halamannya 50 (menggunakan Promise .then().catch())
filterBooksPromise(true, 50)
  .then(books => {
    console.log("Buku berwarna dengan 50 halaman:", books);
  })
  .catch(error => {
    console.log("Error:", error.message);
  });

// Kondisi 2 & 3: menggunakan async/await

async function processBookFilters() {
  // Kondisi 2: bukunya tidak berwarna dan jumlah halamannya 250
  try {
    const booksNoColor250 = await filterBooksPromise(false, 250);
    console.log("Buku tidak berwarna dengan 250 halaman:", booksNoColor250);
  } catch (error) {
    console.log("Error:", error.message);
  }

  // Kondisi 3: bukunya berwarna dan jumlah halamannya 30
  try {
    const booksColor30 = await filterBooksPromise(true, 30);
    console.log("Buku berwarna dengan 30 halaman:", booksColor30);
  } catch (error) {
    console.log("Error:", error.message);
  }
}

// Panggil fungsi async
processBookFilters();