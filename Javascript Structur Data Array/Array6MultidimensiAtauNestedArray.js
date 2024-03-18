const board = [
    [null,null,"X"], //index ke 0 pada array board
    ["X","X",null ], //index ke 1 pada array board
    ["O",null,"X" ]  //index ke 2 pada array board
]

console.log(board);
//  Menampilkan seluruh elemen yang terletak diindex 0 board
console.log(board[0][2])
// console.log(board[0][2]) mengakses elemen pada indeks 0 di dalam array board, 
// kemudian dari array tersebut mengambil elemen yang berada pada indeks ke-2.
// Di sini, kita mengakses baris pertama (indeks 0) dari array board yaitu [null,null,"X"], dan kemudian 
// elemen ketiga (indeks 2) dari baris tersebut. [index 0 = null, index 1 = null, index 2 = "X"]
// Pada contoh ini, elemen tersebut adalah "X", yang kemudian ditampilkan ke konsol.