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