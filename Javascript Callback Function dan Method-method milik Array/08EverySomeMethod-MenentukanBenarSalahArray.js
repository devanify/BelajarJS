/**
 * every
 * akan mengembalikan nilai boolean true pada saats eluruh nilai yang ada pada suatu array memiliki kriteria yang sama, false jika sebalinya
 */

const kataKata = ['saya', 'kita', 'kamu'];

const loging1 = kataKata.every(kata => {
    return kata.length === 4
}) //true
console.log(loging1)

/**
 * some
 * mirip dengan every, tapi lebih fleksibel. hasilnya akan trus jika salah isi dari array memiliki kriteria yang sama. akan false jika sama sekali tidak ada yang sesuai kriteria.
 */

const kataKata2 = ['saya', 'kita', 'kamu', 'aku'];
const loging2 = kataKata2.some( kata => {
    return kata.length === 4
}) //true

console.log(loging2)

