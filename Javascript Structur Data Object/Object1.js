/*
- Object adalah sekumpulan properties.
- Properties merukan sebuah key-value
- Mengaksesnya meggunakan CUSTOM-KEYS ,yang dimana ini yang berbeda dengan Array / Nestedarray yang mengakses menggunnakan index
*/

// Object Student
const student = {
//  Key     : Value
    name    : "Evan",   //properties 1
    age     : 20,       //properties 2
    add     : "Bali",   //properties 3
};
console.log(student);
/*
Cara 1 Memanggil Object - Tidak disarankan
            namaObject['keyObject']
*/
console.log("Menampilkan Seperti Array");
console.log(student['name']);

/*
Cara 2 Memanggil Object - Best Practice
            namaObject.keyObject;
*/
console.log("Menampilkan Dengan Best Practice");
console.log(student.name);
console.log(student.age);
console.log(student.add);