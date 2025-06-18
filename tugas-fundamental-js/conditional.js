var sentence = "Saya Sangat Senang Sekali Belajar Programming dan Saya Juga Senang Belajar Javascript";

if(sentence.length < 10){
    console.log("Kalimat Pendek");
}else if(sentence.length >= 10 && sentence.length <= 30){
    console.log("Kalimat Sedang");
}
else{
    console.log("Kalimat Panjang");
}

var nilai = 53;
if(nilai >= 80){
    console.log("Indeksnya A");
}else if(nilai >= 70 && nilai < 80){
    console.log("Indeksnya B");
}else if(nilai >= 60 && nilai < 70){
    console.log("Indeksnya C");
}else if(nilai >= 50 && nilai < 60){
    console.log("Indeksnya D");
}else{
    console.log("Indeksnya E");
}

var tanggal = 29;
var bulan = 9;
var tahun = 1990;
var bulanText = "";

switch (bulan) {
    case 1:
        bulanText = "Januari";
        break;
    case 2:
        bulanText = "Februari";
        break;
    case 3:
        bulanText = "Maret";
        break;
    case 4:
        bulanText = "April";
        break;
    case 5:
        bulanText = "Mei";
        break;
    case 6:
        bulanText = "Juni";
        break;
    case 7:
        bulanText = "Juli";
        break;
    case 8:
        bulanText = "Agustus";
        break;
    case 9:
        bulanText = "September";
        break;
    case 10:
        bulanText = "Oktober";
        break;
    case 11:
        bulanText = "November";
        break;
    case 12:
        bulanText = "Desember";
        break;
    default:
        break;
}
console.log(tanggal + " " + bulanText + " " + tahun);
