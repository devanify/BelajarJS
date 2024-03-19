const studentsAge = {
    evan : 21,
    made : 19,
    nyoman : 21,
    muki : 21,
    lopsa : 23,
    madehh : 22,
    wedo : 18
}

for (let student in studentsAge){
    console.log(`Saya ${student} memiliki umur ${studentsAge[student]} tahun`)
}

let totalAge = 0;
let Umurs = Object.values(studentsAge);

for (let umur of Umurs){
    totalAge += umur;
}

console.log(`Umur rata-rata maahsiswa adalah ${totalAge / Umurs.length}`)