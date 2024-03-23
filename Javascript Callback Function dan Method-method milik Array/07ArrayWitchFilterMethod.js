/**
 * filter
 * function yang akan mengembalikan nilai array lagi yang sudah dimanipulasi sesuai dengan kriteria yang telah ditetapkan
 */

const angka = [1,2,3,4,5,6,7,8,9]
console.log(angka)
//                          n adalah penamaan variabel(bebas dalam penamaan)
const ganjil = angka.filter(n => { 
    return n % 2 === 1; //jika nilai n merupakan ganjil maka
    //callback function ( => ) akan membuat array baru berisi angka-angka ganjil
    //dari kondisi diatas
})
console.log(ganjil)
//[1,3,5,7,9]

// contoh penggunaan lain pada suatu object
const bahasa = [
    
    {
        name : 'javascript',
        rank : 2,
        year : 2020
    },
    {
        name : 'php',
        rank : 5,
        year : 2020
    },
    {
        name : 'rust',
        rank : 3,
        year : 2020
    },
    {
        name : 'golang',
        rank : 1,
        year : 2020
    },
]

const limaBesar = bahasa.filter( rate => rate.rank < 5)
console.log(limaBesar)

//mapping dan filter ini mirip" sehingga kita bisa memanfaatkan maping setelah proses filter

//contoh dari bahasa diatas setelah di rnak saya ingin mengurutkan ranknya
const rankUrut = limaBesar.map(rankU => rankU.name).sort();
console.log(rankUrut)

//bisa juga diajdikan 1
//bahasa.filter( rate => rate.rank < 5).map(rate => rate.name).sort(); //eksekusi di console 