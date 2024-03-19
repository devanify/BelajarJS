const mahasiswa = [
    ['Made', 'Jaya', 'Komang'],
    ['Nyoman', 'Sumbi', 'Oka'],
    ['Sayi', 'Ananta', 'Tora', 'Sanjaya', 'Dwi']
];

for (let i = 0; i < mahasiswa.length; i++){
    const data = mahasiswa[i];
    console.log(`Berikut Mahasiwa dari Kelas ${i+1} :`);
    for (let j = 0; j < data.length; j++){
        console.log(`   ${data[j]}`);
    }
}