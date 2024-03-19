const mahasiswa = [
    ['Made', 'Jaya', 'Komang'],
    ['Nyoman', 'Sumbi', 'Oka'],
    ['Sayi', 'Ananta', 'Tora', 'Sanjaya', 'Dwi']
];

for (let i = 0; i < mahasiswa.length; i++){
    const dataRow =  mahasiswa[i];
    console.log(`data row ke ${i+1}`);
    for ( let j = 0; j < dataRow.length ; j++){
        console.log (`  ${dataRow[j]}`);
    }
}