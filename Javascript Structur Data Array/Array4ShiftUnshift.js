/*
Method Yang dimiliki Array
1. Unsift - Menambahkan item pada awal array
2. Shift - menghapus item pada awal array
*/

let Jurusan =["Sistem Informasi", "Sistem Komputer"];
console.log("Nilai awal array")
console.table(Jurusan);
// Setelah ditambahkan dengan method UNSHIFT
console.log("Setelah Menambahkan dengan method UNSHIFT")
Jurusan.unshift("Teknologi Infromasi","Bisnis Vokasi");
console.table(Jurusan);

// Setelah dihapus dengan method shift
console.log("Setelah dihapus dengan method SHIFT")
Jurusan.shift();
console.table(Jurusan);