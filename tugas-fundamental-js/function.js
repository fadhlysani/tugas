/***************
 * SOAL No 1
 */

function introduce(name, gender, profession, age) {
    if(gender === "laki-laki") {
        return `Pak ${name} adalah seorang ${profession} yang berusia ${age} tahun`;
    }else{
        return `Bu ${name} adalah seorang ${profession} yang berusia ${age} tahun`;
    }
}
 
var john = introduce("John", "laki-laki", "penulis", "30")
console.log(john) // Menampilkan "Pak John adalah seorang penulis yang berusia 30 tahun"

var sarah = introduce("Sarah", "perempuan", "model", "28")
console.log(sarah) // Menampilkan "Bu Sarah adalah seorang model yang berusia 28 tahun"

/***************
 * SOAL No 2
 */

function findUniqueCharacter(str) {
    var uniqueChars = [];
        for(var i = 0; i < str.length; i++) {
            var found  = false;
            for(var j = 0; j < str.length; j++) {
                if(i != j && str[i] == str[j]) {
                    found = true;
                    break;
                }
            }
            if(found == false) {
                uniqueChars.push(str[i]);
            }
        }
    return uniqueChars.join('');         
}

var text = "Super Bootcamp Fullstack Dev 2022"
console.log(findUniqueCharacter(text.toLowerCase()));

/***************
 * SOAL No 3
 */

var angka = [2,3,1,9,12,8,9,7];

function findMax(arr) {
    var max = arr[0];
    for(var i = 1; i < arr.length; i++) {
        if(arr[i] > max) {
            max = arr[i];
        }
    }
    return max;
}
function findMin(arr) {
    var min = arr[0];
    for(var i = 1; i < arr.length; i++) {
        if(arr[i] < min) {
            min = arr[i];
        }
    }
    return min;
}

console.log("Angka terbesar adalah: " + findMax(angka));
console.log("Angka terkecil adalah: " + findMin(angka));

/***************
 *  SOAL No 4
 */

function arrangeString (str) {
    var sortedStr = str.split('').sort().join('');
    return sortedStr;
}

// TEST CASE 
console.log(arrangeString("bahasa")) // Output : aaabhs
console.log(arrangeString("similikiti")) // Output : iiiiiklmst
console.log(arrangeString("sanbercode")) // Output : abcdeenors 
console.log(arrangeString("")) // Output : ""

/***************
 *  SOAL No 5
 */

function palindrome(str) {
    var newStr = str.split('').reverse().join('');

    if(newStr === str) {
        return true;
    }else {
        return false;
    }   
}

// TEST CASES
console.log(palindrome('katak')); // true
console.log(palindrome('blanket')); // false
console.log(palindrome('nababan')); // true
console.log(palindrome('haji ijah')); // true
console.log(palindrome('mister')); // false

/*****************
 * SOAL No 6
 */

function angkaPalindrome(num) {
  str = num.toString();
  while (true) {
    num++;
    var reversedStr = num.toString().split('').reverse().join('');
    if (reversedStr === num.toString()) {
      return num;
    }
  }

}

// TEST CASES
console.log(angkaPalindrome(8)); // 9
console.log(angkaPalindrome(10)); // 11
console.log(angkaPalindrome(117)); // 121
console.log(angkaPalindrome(175)); // 181
console.log(angkaPalindrome(1000)); // 1001


/*****************
 *  SOAL No 7
 */

function cekPermutasi(str1, str2) {
  if (str1.length !== str2.length) {
    return false;
  }else{
    var sortedStr1 = str1.split('').sort().join('');
    var sortedStr2 = str2.split('').sort().join('');

    return sortedStr1 === sortedStr2;
  }
}

// TEST CASES
console.log(cekPermutasi("abah", "baha")); // true
console.log(cekPermutasi("ondel", "delon")); // true
console.log(cekPermutasi("paul sernine", "arsene lupin")); // true
console.log(cekPermutasi("taco", "taca")); // false