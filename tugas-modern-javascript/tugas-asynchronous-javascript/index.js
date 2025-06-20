var readBooks = require('./callback.js')
 
var books = [
    {name: 'LOTR', timeSpent: 3000}, 
    {name: 'Fidas', timeSpent: 2000}, 
    {name: 'Kalkulus', timeSpent: 4000},
    {name: 'komik', timeSpent: 1000}
]

let waktuAwal = 10000; // 10 detik
let i = 0;

function bacaBukuSecaraBerurutan(sisaWaktu) {
    if (sisaWaktu > 0 && i < books.length) {
        readBooks(sisaWaktu, books[i], function(waktuTerbaru) {
            i++;
            bacaBukuSecaraBerurutan(waktuTerbaru);
        });
    } else if (i === books.length) {
        console.log("Semua buku sudah terbaca!");
    } else {
        console.log("Waktu habis, tidak bisa membaca buku lagi.");
    }
}

bacaBukuSecaraBerurutan(waktuAwal);