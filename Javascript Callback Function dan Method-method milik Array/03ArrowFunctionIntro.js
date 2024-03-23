/**
 * arrow function adalah Ini adalah cara alternatif untuk menulis fungsi dalam JavaScript yang lebih ringkas dan ekspresif.
 */

// Fungsi reguler
function tambah1(a, b) {
    return a + b;
  }
  
  // Arrow function
  const tambah2 = (a, b) => {
    return a + b;
  };
  

  //reguler function
  function pangkat(x){
    return x*x;
  }
  hasil = pangkat(5);
  console.log(hasil)


//   const perpangkatan = (y) =>{
//     return y * y;
//   }
//   console.log(perpangkatan(6));

//jika parameternya satu bisa ditulis tanpa kurung  namun lebih baik gunakan kurung untuk menghindari kebingungan
const perpangkatan = x => {
    return x * x;
}
console.log(perpangkatan(4));

//arrow function tanpa parameter
const random = () =>{
    return Math.floor(Math.random() * 10);
}

console.log(random());