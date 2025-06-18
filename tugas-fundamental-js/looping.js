var i = 0;

/************************
 * Soal No 1
 * **************/

console.log("Looping Pertama");
while(i < 20){
    i += 2;
    console.log(i + " - I love coding");
}

console.log("Looping Kedua");
while(i > 0){
    console.log(i + " - I will become fullstack developer");
    i -= 2;
}

/************************
 * Soal No 2
 * **************/

while(i < 20){
    i += 1;
    if(i % 2 === 1){
        console.log(i + " - Angka Ganjil");
    }else{
        console.log(i + " - Angka Genap");
    }
}

/************************
 * Soal No 3
 * **************/

for(var j = 1; j <= 20; j++){
    if(j % 3 === 0){
        if(j % 2 === 0){
            console.log(j + " - ToT");
        }
        else{
            console.log(j + " - I Love Coding");
        }
    }else if(j % 2 === 0){
        console.log(j + " - Berkualitas");
    }else{
        console.log(j + " - Santai");
    }
}

/************************
 * Soal No 4
 * **************/

for(var k = 1; k <= 7; k++){
    console.log("#".repeat(k));
}

/************************
 * Soal No 5
 * **************/

var sentence = "Fullstack Developer";
var konsonan = "";
for(var l = 0; l < sentence.length; l++){
    var char = sentence[l].toLowerCase();
    if(char >= 'a' && char <= 'z' && !['a', 'e', 'i', 'o', 'u'].includes(char)){
        konsonan += char;
    }
}
console.log(konsonan.toUpperCase());