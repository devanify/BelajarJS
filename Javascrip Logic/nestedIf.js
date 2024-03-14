const password = prompt("Buat password");
// cek password lebih dari 6 karakter
if (password.length >= 6) {
    // cek password ada spasi atau tidak
    if(password.indexOf(' ') === -1){
        console.log("Password Valid");
    } else{
        console.log ("Password tidak boleh ada spasi");
    }
} else {
    console.log("Password Harus minimal 6 karakter");
}