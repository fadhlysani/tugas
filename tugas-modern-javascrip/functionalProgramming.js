/********************
 * Soal No.1
 */

const hitungPersegi = (sisi) => {
    return `Luas Persegi: ${sisi * sisi}`;
}

const HitungPersegiPanjang = (panjang, lebar) => {
    return `Luas Persegi Panjang: ${panjang * lebar}`;
}

console.log(hitungPersegi(8))
console.log(HitungPersegiPanjang(12,7))


/*****************
 * Soal No.2
 * 
 */

const hitungKubus = (sisi) => {
    return `Volume Kubus: ${sisi * sisi * sisi}`;
}

const HitungBalok = (panjang, lebar, tinggi) => {
    return `Volume Balok: ${panjang * lebar * tinggi}`;
}

console.log(hitungKubus(8));
console.log(HitungBalok(12,7, 5))

/*****************
 * Soal No.3
 * 
 */

var people =[
  {name: "John", job: "Programmer", gender: "male", age: 30},
  {name: "Sarah", job: "Model", gender: "female", age: 27},
  {name: "Jack", job: "Engineer", gender: "male", age: 25},
  {name: "Ellie", job: "Designer", gender: "female", age: 35},
  {name: "Danny", job: "Footballer", gender: "male", age: 30},
];

people.sort((a, b) => a.age - b.age);

const recursiveFuntion = (people, index = 0) => {
    if (index < people.length) {
        console.log(`${index + 1}. ${people[index].name}`);
        recursiveFuntion(people, index + 1);
    }
}

recursiveFuntion(people);

/*****************
 * Soal No.4
 * */

var phones=[
  {name: "Samsung Galaxy A52", brand: "Samsung", year: 2021, colors: ["black", "white"]},
  {name: "Redmi Note 10 Pro", brand: "Xiaomi", year: 2021, colors: ["white", "blue"]},
  {name: "Redmi Note 9 Pro", brand: "Xiaomi", year: 2020, colors: ["white", "blue", "black"]},
  {name: "Iphone 12", brand: "Apple", year: 2020, colors: ["silver", "gold"]},
  {name: "Iphone 11", brand: "Apple", year: 2019, colors: ["gold", "black", "silver"]},
]

phones.sort((a, b) => a.year - b.year);
var i= 0;
phones.forEach(item => {
    if(item.colors.includes("black")) {
        i++;
        console.log(i + ". " + item.name + ", colors avalible: " + item.colors.join(", "));
    }
});

/*****************
 * Soal No.5
 * */

phones.forEach(item => {
    if(item.year >= 2020){
        item.colors.push("brown");
    }

    console.log(`${item.name} (${item.year}) - Colors: ${item.colors.join(", ")}`);
});



