var readBooksPromise = require('./promise.js')
 
var books = [
    {name: 'LOTR', timeSpent: 3000}, 
    {name: 'Fidas', timeSpent: 2000}, 
    {name: 'Kalkulus', timeSpent: 4000}
]

let waktuAwal = 10000; // 10 detik

readBooksPromise(waktuAwal, books[0])
    .then(sisaWaktu => readBooksPromise(sisaWaktu, books[1]))
    .then(sisaWaktu => readBooksPromise(sisaWaktu, books[2]))
    .catch(error => {
        console.log("Ada masalah saat membaca buku:", error);
    });