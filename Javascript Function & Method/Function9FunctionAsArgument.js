function duaKali (func){
    func();
    func();
}

function lemparDadu(){
    const hasil = Math.floor(Math.random() * 6) + 1;
    console.log(hasil);
}

// cara menggunakan
console.log(duaKali(lemparDadu));

//Function Bernilai Balik Function
function hasilnyaAdalahFunction (){
    const rand = Math.random();
    if (rand > 0.1){
        return function(){
            console.log('Selamat, angkanya lebih besar');
        };
    } else {
        return function () {
            console.log('Maaf, mungkin kita coba lagi !')
        };
    }
}