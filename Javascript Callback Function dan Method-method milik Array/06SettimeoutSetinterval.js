/**
 * setTimeout() dan setIntervval()
 * callback function yang bukan berasal dari array. fungsinya unutk memberikan waktu jeda dan melakukan perulangan setiap waktu yang ditentukan.
 */

setTimeout(() =>{
    //proses
},3000) //proses di eksekusi setelah 3 detik

setInterval(() =>{
    //proses
},2000) // akan melakukan proses secara berulang setiap 2 detik

console.log('hallo');
setTimeout(()=> {
console.log('ini muncul setelah 5 detik')
},5000)

const interval = setInterval(() =>{
    console.log(Math.random())
},2000)

//jika ingin menghentikan interval gunakan clearInterval()
//clearInterval(interval)
