/**
 * forEach
 * dapat melakukan callback function yang berarti dapat memanggil sebuah fungsi sebanyak, jumlah element yang dimiliki array
 */

const angka = [1,2,3,4,5,6,7,8];

angka.forEach(function(element){
    // MENAMPILKAN ANGGKA MODULUS 2 
    if (element % 2 === 0){
        console.log(element)
    }
})
//    nama plural
const langs  = [
    {
        nama : 'golang',
        untuk : 'backend'
    },
    {
        nama : 'javascript',
        untuk : 'backend'
    },
    {
        nama : 'php',
        untuk : 'backend'
    },
    {
        nama : 'rust',
        untuk : 'backend'
    },
];
// plural (beragam) ||| nama singular (tunggal)
langs.forEach(function (lang){
    console.log(`${lang.nama} - ${lang.untuk}`)
})