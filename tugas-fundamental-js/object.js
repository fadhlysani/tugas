/*******************
 * Soal No. 1
 */

buah = [
    {
        nama: "Nanas",
        warna: "Kuning",
        adaBijinya: "tidak",
        harga: 9000
    },
    {
        nama: "Jeruk",
        warna: "Oranye",
        adaBijinya: "ada",
        harga: 8000
    },
    {   
        nama: "Semangka",
        warna: "Hijau & Merah",
        adaBijinya: "ada",
        harga: 10000
    },
    {
        nama: "Pisang",
        warna: "Kuning",
        adaBijinya: "tidak",
        harga: 5000
    }];

buah.forEach(function(item, index) {
    if(item.adaBijinya === "tidak") {
        console.log(item);
    }
});

/************************
 * Soal No. 2
 */

var dataFilm = [];

function tambahDataFilm(judul, durasi, genre, tahun) {
    var film = {judul: judul, durasi: durasi, genre: genre, tahun: tahun};
    dataFilm.push(film);
}

tambahDataFilm("LOTR", "2 jam", "action", "1999")
tambahDataFilm("avenger", "2 jam", "action", "2019")
tambahDataFilm("spiderman", "2 jam", "action", "2004")
tambahDataFilm("juon", "2 jam", "horror", "2004")

dataFilm.forEach(function(item, index) {
    console.log(item);
});

/************************
 * Soal No. 3
 */

var people =[
  {name: "John", job: "Programmer", gender: "male", age: 30},
  {name: "Sarah", job: "Model", gender: "female", age: 27},
  {name: "Jack", job: "Engineer", gender: "male", age: 25},
  {name: "Ellie", job: "Designer", gender: "female", age: 35},
  {name: "Danny", job: "Footballer", gender: "male", age: 30},
];

people.forEach(function(person) {
    if(person.gender === "male" && person.age > 29) {
        console.log(person);
    }
});

/************************
 * Soal No. 4
 */
var peopleLength = people.length;
var peopleAgeMean = 0.0
var peopleAgeSum = 0;
people.forEach(function(person) {
    peopleAgeSum += person.age;
    });
peopleAgeMean = peopleAgeSum / peopleLength;
console.log("Rata-rata umur: " + peopleAgeMean);



/*********************
 * Soal No. 5
 */

people.sort(function(a, b) {
    return a.age - b.age;
});

for(var i = 0; i < people.length; i++) {
    console.log((i+1) + ". " + people[i].name);
}

/************************
 *  Soal No. 6
 */

var phone = {
  name: "Samsung Galaxy Note 20",
  brand: "Samsung",
  colors: ["Black"],
  release: 2020
}

function addColors(color) {
    phone.colors.push(color);
}

addColors("Gold")
addColors("Silver")
addColors("Brown")

console.log(phone)


