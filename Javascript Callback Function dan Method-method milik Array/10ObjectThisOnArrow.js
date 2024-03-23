// Object This Di Dalam Arrow Function Mengarah Pada Object Global Window
const person ={
    firstName : 'Jhon',
    lastName : 'Krui',
    // fullName : function (){
    //     return `${this.firstName} ${this.lastName}`
    // }
    //mari gunakan arrow function
    fullName : () =>{
        // console.log(this)
        return `${this.firstName} ${this.lastName}`
        //jika di console.log(person.fullName()) maka hasilnya undifine
        //hal ini terjadi atau dapat di cek karena scope this pada arroow function itu scopenya windows alias sudah bukan scope object person
    },

    panggilNanti : function (){
        setTimeout(function (){
            // console.log(this)
            console.log(this.firstName)
        },5000)
        //ini juga undefined sama seperti arrow function diatas 
    }
}
console.log(person.panggilNanti())
console.log(person.fullName())