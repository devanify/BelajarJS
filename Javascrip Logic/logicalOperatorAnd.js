// menerapkan 2 lebih kondisi tanpa menerapkan nested if
/*
&& = and
|| = or
!  = not
*/
/*
example 1 

let age = 10;
let gender = 'male';

if (gender === 'male' && age >= 20){
    console.log("Legal menikah");
} else {
    console.log("Tidak legal")
}
*/

const password = prompt('Masukkan password');

if (password.length >= 6 && password.indexOf(' '=== -1)){
    console.log('password valid');
} else {
    console.log('password tidak valid');
}