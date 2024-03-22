let programing = 'Javascript';

function bahasa () {
    //jika let programing = 'Typescript'; tidak ada (//) maka hasil dari bahasa(); adalah 'Javascript karena variable programing yang berada diluar function levelnya lebih tinggi dan jika tidak didefiniskan di dalam function namun didalam function memanggil variabel trsebut maka data variable yang berada diluar function akan ditampilkan, namun berbeda dengan sebaliknya jika diluar function tidak terdapat variable dan dialam function ada variable dan tidak didefinisikan maka hasilnya akan eror

   // let programing = 'Typescript';
    console.log(programing);
}

// scope atau ruang lingkup diluar function akan memanggil data yang berisi 'javascript'
console.log(programing);
// scope atau ruang lingkupnya pada function sehingga data yang ditampilkan adalah 'Typescript'
bahasa();