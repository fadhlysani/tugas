/************
 * Soal N0. 1
 */

var dataPeserta = ["john", "laki-laki", "programmer", "30"];
var output ="Halo, nama saya " + dataPeserta[0] + ". Saya " + dataPeserta[1] + " berumur " + dataPeserta[3] + " tahun bekerja sebagai seorang " + dataPeserta[2] + ".";

console.log(output);

/************************
 * Soal No. 2
 */

var sayuran=[];
sayuran.push("Kangkung");
sayuran.push("Bayam");
sayuran.push("Buncis");
sayuran.push("Kubis");
sayuran.push("Timun");
sayuran.push("Seledri");
sayuran.push("Tauge");

sayuran.sort();
for(var i = 0; i < sayuran.length; i++){
    console.log((i+1) + ". " + sayuran[i]);
}


/************************
 * Soal No. 3
 */

var word = "car";
var subsets = [];

for (var i = 0; i < word.length; i++) {
  for (var j = i; j < word.length; j++) {
    subsets.push(word.substring(i, j + 1));
  }
}
console.log(subsets);

/************************
 * Soal No. 4
 */

var numbers = [ 4,5,1,4,6,8,9,21];
var total = 0;
for (var i = 0; i < numbers.length; i++) {
    total += numbers[i];
}
console.log("Total: " + total);

/************************
 * Soal No. 5
 */

var kumpulanAngka = [
 [1,3,5,7,8,9],
 [4,5,6,2,3,1],
 [6,7,8,1,3,5],
];

var totalKumpulan = [];
for (var i = 0; i < kumpulanAngka.length; i++) {
    subTotal = 0;
    for (var j = 0; j < kumpulanAngka[i].length; j++) {
        subTotal += kumpulanAngka[i][j];
    }

    totalKumpulan.push(subTotal);
}
console.log(totalKumpulan);