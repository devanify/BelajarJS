// Jika hanya satu statement, bisa lebih ringkas tanpa menggunakan kurung kurawal dan return
const tambah = (a, b) => a + b;

//jika simple kurung kurawal bisa diubah menjadi kurung biasa, namun tidak boleh ada ; di dalam function, selain itu tidak boleh mendeklarasikan variabel di dalam function karena akan eror
const random = () =>(
    Math.floor(Math.random() * 10)
)

console.log(tambah(2,4));
console.log(random());
