/**
 * Try and Catch adalah konstruksi dalam pemrograman yang digunakan untuk menangani pengecualian (exceptions) atau kesalahan yang terjadi selama eksekusi kode. 
 * Blok try digunakan untuk menempatkan kode yang mungkin menghasilkan pengecualian.
 * Blok catch (atau except dalam beberapa bahasa) digunakan untuk menangkap pengecualian yang dihasilkan oleh blok try. Ketika pengecualian terjadi, program akan mencari blok catch yang sesuai dengan tipe pengecualian yang dihasilkan, dan kemudian menjalankan kode di dalamnya.
 */

// const manusia = {
//     nama : 'Wayan',
//     hobi : 'Memancing keributan',
//     kenalan : function (nama){
//         return `Halo nama saya ${nama}. Hobi saya ${this.hobi}`
//     },
//     kenalan2 : function (){
//         return `Halo nama saya ${this.nama}. Hobi saya ${this.hobi}`
//     }
// };

try {
    manusia.kenalan();
} catch{
    console.log(console.log('Error!!!'))
};


//manusia.kenalan(); //ini akan eror dan tidak menjalankan baris selanjutnya jika methos manusia di matikan (Diberikan komentar) dan tanpa try and catch
console.log('setelah proses try and catch')
