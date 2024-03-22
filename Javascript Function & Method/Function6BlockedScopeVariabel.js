let tinggi = 8;
if (tinggi > 5 ){
    let lebar = 10
    console.log(lebar)
}
console.log(tinggi)

//tidak mengakses lebar dari luar
// console.log(lebar); // maka akan eror

/**
 * Dalam javascript saat kita mendeklarasikan suatu variabel di dalam kondisi (pengkondisian) maka variable terbsebut tidak bisa kita akses diluar scopenya (anggap saja {} sebagai scope) 
 */

for(let index = 0; index < 10; index++){
    // const indexNumber = index;
    var indexNumber =index;
    console.log(`ini index ke : ${indexNumber}`)
}

//namun jika indexNumber dipanggil seperti dibawah alais diluar scopenya maka akan eror
// console.log(indexNumber);

//namun saat variablenya diubah dari let atau const menjadi var maka kaan bisa diakses dari luar contohnya seperti berikut

//artinya let dan const memliki blokc scope , sedangkan var langsung didefinisikan sebagi top level sehingga bsia dipanggil dari luar scopenya (contoh pada var indexNumber), ini berbahaya karena variabel tersebut tidak memiliki blcoking scope seingga variabel tersebut bisa dimodikasi dari scope lain 
