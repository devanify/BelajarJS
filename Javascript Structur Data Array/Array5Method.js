/*
Methos lain yangs sering digunakan pada Array Part 1
1. concat - menggabungkan array
2. includes - mencari suatu nilai di dalam array
3. indexOf - sama seperti string.indexOf
4. join - mmebuat suatu string dari sebuah array
5. reverse - membalikkan urutan nilau dari array
6. slice - menyalin sebagian nilai dari array
7 sort - memgurutkan nilai pada array
8.splice - menghapus dan menghapus elemnt
*/

// Concat
console.log ("Contoh penggunaan CONCAT");
const array1 = ["a","b","c"];
const array2 = ["e","f","g"];
const array3 = array2.concat(array1);
console.log(array3); // ['e', 'f', 'g', 'a', 'b', 'c']

// Includes
console.log ("Contoh penggunaan INCLUDES");
console.log(array1.includes('A')) // false - mengembalikan nilai true dan false
console.log(array1.includes('a')) // true - mengembalikan nilai true dan false


//indexOf
console.log ("Contoh penggunaan INDEXOF");
const nama = ["evan", "byshon", "ada", "made", "nyoman"];
console.log(nama.indexOf("nyoman")); // result : 4 karena nyoman berada pada index ke 4


// Join
console.log ("Contoh penggunaan JOIN");
const avatar = ['air','api','tanah','udara'];
console.log(avatar.join())    //air,api,tanah,udara
console.log(avatar.join(""))  //airapitanahudara
console.log(avatar.join("-")) //air-api-tanah-udara


// Reverse
console.log ("Contoh penggunaan REVERSE");
const number = ['one', 'two', 'three'];
console.log(number); //['one', 'two', 'three']
const reversedNumber = number.reverse();
console.log(reversedNumber); //['three', 'two', 'one']



//slice
console.log("Contoh penggunaan SLICE");
const hewan = ['kucing', 'anjing', 'burung', 'harimau', 'jalak'];
console.log(hewan.slice(2)); // ['burung', 'harimau', 'jalak'] - Ini akan mengembalikan bagian dari array mulai dari index 2 hingga akhir.
console.log(hewan.slice(1, 4)); // ['anjing', 'burung', 'harimau'] - Ini akan mengembalikan bagian dari array mulai dari index 1 hingga index 4 (index 4 tidak termasuk).
console.log(hewan.slice(-2)); // ['harimau', 'jalak'] - Ini akan mengembalikan dua elemen terakhir dari array.
console.log(hewan.slice(2, -1)); // ['burung', 'harimau'] - Ini akan mengembalikan bagian dari array mulai dari index 2 hingga satu sebelum elemen terakhir.


// Sort - hanya mengurutkan dengan karakter terawal / terdepan, bukan berdasarkan nilainya
console.log ("Contoh penggunaan SORT");
const angka = [34,1,2,32,43,1000];
console.log(angka.sort());
console.log(array3.sort());
console.log(nama.sort());


// splice
console.log ("Contoh penggunaan SPLICE");
const months = ["jan", "march", "april", "month", "june", "july", "august"];
months.splice(1, 0, "feb"); // elemen "feb" ditambahkan pada index ke-1 tanpa menghapus elemen apa pun.
console.log(months); // ['jan', 'feb', 'march', 'april', 'month', 'june', 'july', 'august']

months.splice(4,1,"may"); //elemen pada index ke-4 diganti menjadi "may".
console.log(months); // ['jan', 'feb', 'march', 'april', 'may', 'june', 'july', 'august']

months.splice(4,3,"desember"); // tiga elemen dimulai dari index ke-4 dihapus dan diganti dengan "desember".
console.log(months); // ['jan', 'feb', 'march', 'april', 'desember', 'july', 'august']


