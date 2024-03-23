/**
 * MAP
 * nilai baliknya adalah array baru yang sudah dimodifikasi melalui callback function dari suatu array
 */

const angka = [1,2,3,4,5,6,7,8,9,10];
console.table(angka);
const angkaDouble = angka.map(function(number){
    return number * 2;
})
console.table(angkaDouble);



const merk= ['dancow', 'indomilk','milo', 'nutribost'];
const merkUrut = merk.map(function(upercase){
    return upercase.toUpperCase();
}) 

console.table(merkUrut);