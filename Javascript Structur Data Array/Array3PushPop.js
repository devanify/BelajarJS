/*
Method Yang dimiliki Array
1. Push - Menambahkan item pada akhir array
2. Pop - menghapus item pada akhir array
*/

let Jurusan =["Sistem Informasi", "Sistem Komputer"];
console.log("Nilai awal array")
console.table(Jurusan);
// Setelah ditambahkan dengan method PUSH
console.log("Setelah Menambahkan dengan method PUSH")
Jurusan.push("Teknologi Infromasi","Bisnis Vokasi");
console.table(Jurusan);

// Setelah dihapus dengan method POP
console.log("Setelah dihapus dengan method POP")
Jurusan.pop();
console.table(Jurusan);