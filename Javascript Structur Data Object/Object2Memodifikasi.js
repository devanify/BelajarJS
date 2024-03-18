// Object Orang
const orang = {
    nama    : "Made",
    umur    : 20,
    asal    : "Tabanan",
};

console.log(orang);
//Memodifikasi nama menjadi Wayan - best pratice
orang.nama = "Wayan";
console.log(orang);

//Menambahkan properties - best practice
orang.gender = "laki-laki";
console.log(orang);

/*
Cara lain memodifikasi juga bisa menggunakan 

objectName['keyName'] = "value";

namun lebh baik menggunakan -Best Practice

objectName.keyName = "Value";
*/