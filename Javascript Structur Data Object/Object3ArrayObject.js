// Array yang besisi Object 
const bahasaCart = [
    {
        nama : 'vue.js',
        rank : 2,
        author : 'Evan You'
    },
    {
        nama : 'react.js',
        rank : 1,
        author : 'Jordan Walke'
    },
    {
        nama : 'angular.js',
        rank : 3,
        author  : {
            author1 : 'Misko Hevery',
            author2 : 'Adam Abrons'
        }
    },
];

console.log("Menampilkan Object bahasaCart");
console.log(bahasaCart);

console.log("Menampilkan data Object pada baris pertama (index ke 0)");
console.log(bahasaCart[0]);

console.log("Menampilkan nama dari objek pada baris kedua (index ke 1)");
console.log(bahasaCart[1].nama);

console.log("Menampilkan nama author pertama dari objek pada baris ketiga (index ke 2)");
console.log(bahasaCart[2].author.author1);
console.log("Menampilkan nama author kedua   dari objek pada baris ketiga (index ke 2)");
console.log(bahasaCart[2].author.author2);