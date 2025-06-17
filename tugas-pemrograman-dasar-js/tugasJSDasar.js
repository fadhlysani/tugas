/***********************
 * Soal Pertama 
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
 * Soal Kedua 
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
 * Soal Ketiga
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
