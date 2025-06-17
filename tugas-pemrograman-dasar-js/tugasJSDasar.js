/***********************
 * Soal No. 1 (Menyusun kata menjadi kalimat) 
 * *********************/
var perkenalan = 'Nama saya adalah';
var nama = "Muhammad Fadhly Sani"; // isi dengan nama kalian
var kata1 = "saya";
var kata2 = "berharap";
var kata3 = "untuk";
var kata4 = "menjadi";
var kata5 = "seorang";
var kata6 = "software";
var kata7 = "engineer";

var combine = perkenalan + " " + nama + " " + kata1 + " " + kata2 + " " + kata3 + " " + kata4 + " " + kata5 + " " + kata6 + " " + kata7;
console.log(combine);

/************************ 
 * Soal No.2 Kombinasi Huruf & Angka Password (Akses karakter dalam string) 
 * password ke satu : TEST123
 * password ke dua : B3B3K 
***************************/
var abjad = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var angka = "0123456789";

var password1 = abjad[19] + abjad[4] + abjad[18] + abjad[19] + angka[1] + angka[2] + angka[3];
var password2 = abjad[1] + angka[3] + abjad[1] + angka[3] + abjad[10];
console.log("Password ke satu: " + password1);
console.log("Password ke dua: " + password2);


/************************
 * Soal No. 3 Mengurai Kalimat (Substring)
 * First Word: wow
 * Second Word: JavaScript
 * Third Word: is
 * Fourth Word: so
 * Fifth Word: cool
 *  *********************/
var sentence2 = 'wow JavaScript is so cool';
var firstWord = sentence2.slice(0, 3);
var secondWord = sentence2.slice(4, 14);
var thirdWord = sentence2.slice(15, 17);
var fourthWord = sentence2.slice(18, 20);
var fifthWord = sentence2.slice(21, 25);

console.log("First Word: " + firstWord);
console.log("Second Word: " + secondWord);
console.log("Third Word: " + thirdWord);
console.log("Fourth Word: " + fourthWord);
console.log("Fifth Word: " + fifthWord);

/************************
 * Soal No. 4 Menghitung Jumlah Karakter (Menggunakan length)
 * First Word: wow, with length: 3
 * Second Word: JavaScript, with length: 10
 * Third Word: is, with length: 2
 * Fourth Word: so, with length: 2
 * Fifth Word: cool, with length: 4
 *   *********************/
var sentence3 = 'wow JavaScript is so cool';
var firstWordLength = sentence3.slice(0, 3).length;
var secondWordLength = sentence3.slice(4, 14).length;
var thirdWordLength = sentence3.slice(15, 17).length;
var fourthWordLength = sentence3.slice(18, 20).length;
var fifthWordLength = sentence3.slice(21, 25).length;

console.log("First Word: " + firstWord + ", with length: " + firstWordLength);
console.log("Second Word: " + secondWord + ", with length: " + secondWordLength);
console.log("Third Word: " + thirdWord + ", with length: " + thirdWordLength);
console.log("Fourth Word: " + fourthWord + ", with length: " + fourthWordLength);
console.log("Fifth Word: " + fifthWord + ", with length: " + fifthWordLength);

/************************
 * Soal No. 5 Menghitung Jumlah Karakter (Menggunakan length)
 * 2. password kedua : WORLD
 * 3. password ketiga : IMREADY
 * * *********************/
var abjad = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var kode2 = abjad.indexOf('W') + "-" + abjad.indexOf('O') + "-" + abjad.indexOf('R') + "-" + abjad.indexOf('L') + "-" + abjad.indexOf('D');
var kode3 = abjad.indexOf('I') + "-" + abjad.indexOf('M') + "-" + abjad.indexOf('R') + "-" + abjad.indexOf('E') + "-" + abjad.indexOf('A') + "-" + abjad.indexOf('D') + "-" + abjad.indexOf('Y');

console.log("Kode 2: " + kode2);
console.log("Kode 3: " + kode3);

/************************
 * Soal No. 6 Menghitung Jumlah Karakter (Menggunakan length)
****************************/
var pertama = "saya";
var kedua = "senang";
var ketiga = "belajar";
var keempat = "javascript";

var hasil = pertama.charAt(0).toUpperCase() + pertama.slice(1) + " " +
             kedua.charAt(0).toUpperCase() + kedua.slice(1, -1) + kedua.slice(-1).toUpperCase() + " " +
             ketiga.charAt(0).toUpperCase() + ketiga.slice(1, -1) + ketiga.slice(-1).toUpperCase() + " " +
             keempat.toUpperCase();

console.log(hasil);

/************************
 * Soal No. 7 Konversi String ke integer
 * ***********************/
var panjang= "12";
var lebar = "7";
var alas = "6";
var tinggi = "13";

console.log("Luas Persegi Panjang: " + (parseInt(panjang) * parseInt(lebar)));
console.log("Luas Segitiga: " + (parseInt(alas) * parseInt(tinggi) / 2));

/************************
 * Soal No. 8 Konversi String menggunakan Number dan parseFloat
 *  ***********************/
var sisi= " 1 2 ";
var jariJari= "7.5";

console.log("Luas: " + Math.pow(parseInt(sisi.replaceAll(" ", "")), 2));
console.log("Luas Lingkaran: " + (Math.PI * Math.pow(parseFloat(jariJari), 2)).toFixed(2));
