// Tebak angka
let nilaiMax = parseInt(prompt("Masukkan angka anda!"));

while (!nilaiMax){
    nilaiMax = parseInt(prompt("Masukkan angka anda!"));
}

const targetNilai = Math.floor(Math.random() + nilaiMax ) + 1;
console.log(targetNilai);


let tebakan  = parseInt(prompt('Mauskkan tebakanmu !'));

while (parseInt(tebakan) !== targetNilai){
    if (tebakan > targetNilai){
        tebakan = prompt(`Nilai terlalu tinggi ! ${targetNilai}`);
    } else {
        tebakan = prompt(`Nilai terlalu rendah ! ${targetNilai}`)
    }
}

alert ("Tebakan anda BENAR");