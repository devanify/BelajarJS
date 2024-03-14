// alternatif statement if jika memiliki kondisi yangs angat banyak. Maka, lebih baik menggunakan switch daripada if jika ada banyak pilihan

const day = parseInt(prompt("Masukkan angka"));


switch (day){

    case 1 :
        console.log("Minggu");
        break;
    case 2 :
        console.log("Senin");
        break;
    case 3 :
        console.log("Selasa");
        break;
    case 4 :
        console.log("Rabu");
        break;
    case 5 :
        console.log("Kamis");
        break;
    case 6 :
        console.log("Jumat");
        break;
    case 7 :
        console.log("Sabtu");
        break;
    default :
        console.log('Nilai tidak masuk ke case');
        break;
    
}