/**
 * RETURN
 * statement 'return' akan mengakhiri proses di dalam fungsi dan akan memberikan nilai yang didefinisikan pada saat fungsi dipanggil
 */

function kurang (a,b){
    const hasil = a - b;
    //jika sudah ada return tidak perlu console log
    return hasil;
    //karena mengakhiri proses, bisa dibuktikan jika di eksekusi maka proses console.log() berikut tidak akan tereksekusi
    console.log('hallo');
};
hasil1 = kurang(3,2);
console.log(hasil1)

function jumlahkan(a,b){
    if(typeof a !== 'number' || typeof b !== 'number'){
        return false;
    }
    return a + b;
}
hasil2 = jumlahkan('1',4);
console.log(hasil2)
hasil3 = jumlahkan(1,5);
console.log(hasil3)
