
// function
function pangkat(nilai) {
    return nilai * nilai;
}
//variable
console.log(hasil = pangkat(5));

// disederhanakan menjadi

let hasilPangkat = function(nilai){
    return nilai*nilai;
}

//memanggil menggunakan variabelnya
console.log(hasilPangkat(10));