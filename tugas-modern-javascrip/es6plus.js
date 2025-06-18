/***************
 * Soal No.1
 */

let jariJari = 7;
const hitungLuasLingkaran = (jariJari) => {
    return `Luas Lingkaran: ${Math.PI * jariJari * jariJari}`;
}
const hitungKelilingLingkaran = (jariJari) => {
    return `Keliling Lingkaran: ${2 * Math.PI * jariJari}`;
}

console.log(hitungLuasLingkaran(jariJari));
console.log(hitungKelilingLingkaran(jariJari));

/****************
 * Soal No.2
 */

const introduce = (name, age, gender, profession) => {
    return "Pak " + name + " adalah seorang " + profession + " yang berusia " + age + " tahun";
}

//kode di bawah ini jangan dirubah atau dihapus
const perkenalanJohn = introduce("john", "30", "Laki-Laki", "penulis")
console.log(perkenalanJohn) // Menampilkan "pak john adalah seorang penulis yang berusia 30 tahun"


/****************
 * Soal No.3
 * */
const newFunction = (firstName, lastName) => {
    return {
        firstName: firstName,
        lastName: lastName,
        fullName: function() {
            console.log(`Nama lengkap saya adalah ${this.firstName} ${this.lastName}`);
        }
    };
}

// kode di bawah ini jangan diubah atau dihapus sama sekali
console.log(newFunction("John", "Doe").firstName)
console.log(newFunction("Richard", "Roe").lastName)
newFunction("William", "Imoh").fullName()


/****************
 * Soal No.4
 */

let phone = {
   name: "Galaxy Note 20",
   brand: "Samsung",
   year: 2020,
   colors: ["Mystic Bronze", "Mystic White", "Mystic Black"]
}
const {name: phoneBrand, brand: phoneName, year} = phone;
const [colorBronze, colorWhite, colorBlack] = phone.colors;

console.log(phoneBrand, phoneName, year, colorBlack, colorBronze)


/*****************
 * Soal No.5
 */

let warna = ["biru", "merah", "kuning" , "hijau"]

let dataBukuTambahan= {
  penulis: "john doe",
  tahunTerbit: 2020 
}

let buku = {
  nama: "pemograman dasar",
  jumlahHalaman: 172,
  warnaSampul:["hitam"]
}

buku = {
  ...buku,
  warnaSampul: [...buku.warnaSampul, ...warna],
  ...dataBukuTambahan
};

console.log(buku);

/*****************
 * Soal No.6
 */

const addProducts = (oldProduct, newProduct) => {
    return {...oldProduct, products: [...oldProduct.products, ...newProduct]}
}
let samsung ={
 name: "Samsung",
 products :[
  {name: "Samsung Galaxy Note 10", colors: ["black", "gold", "silver"]},
  {name: "Samsung Galaxy Note 10s", colors: ["blue", "silver"]},
  {name: "Samsung Galaxy Note 20s", colors: ["white", "black"]}
 ] 
}

let newProducts = [
 {name: "Samsung Galaxy A52", colors: ["white", "black"]},
 {name: "Samsung Galaxy M52", colors: ["blue", "grey", "white"]}
]

samsung = addProducts(samsung, newProducts)

console.log(samsung)

/*****************
 * Soal No.7
 */

const processData = ([nama, domisili, umur]) => ({ nama, domisili, umur });

// Test Case
let data = ["Bondra", "Medan", 25];
let output = processData(data); 
console.log(output);

/*****************
 * Soal No.8
 */

const graduate = (...dataCollections) => {
  const result = {};

  for (const data of dataCollections) {
    for (const student of data) {
      const { name, class: studentClass } = student;

      if (!result[studentClass]) {
        result[studentClass] = [];
      }
      result[studentClass].push(name);
    }
  }
  return result;
};

// TEST CASES
 const data1 = [
  { name: "Ahmad", class: "adonis"},
  { name: "Regi", class: "laravel"},
  { name: "Bondra", class: "adonis"},
  { name: "Iqbal", class: "vuejs" },
  { name: "Putri", class: "laravel" }
]

const data2 = [
  { name: "Yogi", class: "react"},
  { name: "Fikri", class: "agile"},
  { name: "Arief", class: "agile"}
]


console.log(graduate(data1))
console.log(graduate(data2)) 

