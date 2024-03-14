const role = prompt('Masukkan role anda ');

if (role === 'admin' || role === 'spu'){
    console.log("Akses Diterima");
} else {
    console.log("Akses Ditolak");
}
