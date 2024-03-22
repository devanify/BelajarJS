// 'this' adalah keyword untuk memanggil suatu property pada object yang sama. tujuannya untuk mendapatkan nilainya.
const manusia = {
    nama : 'Wayan',
    hobi : 'Memancing keributan',
    kenalan : function (nama){
        return `Halo nama saya ${nama}. Hobi saya ${this.hobi}`
    },
    kenalan2 : function (){
        return `Halo nama saya ${this.nama}. Hobi saya ${this.hobi}`
    }
}

console.log(manusia.kenalan('made'))
console.log(manusia.kenalan2())