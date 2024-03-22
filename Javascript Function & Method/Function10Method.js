// Method adalah ketika menambahkan function pada suatu object property

//contohnya method Math yang memiliki fuction pada propertinya

const myMath = {
    perkalian : function (x,y){
        return x * y;
    },
    pembagian : function (x,y){
        return x / y;
    },
    pangkat : function (x){
        return x * x;
    }
}

//pemakainnya
console.log (myMath.perkalian(2,4));
console.log (myMath.pembagian(2,4));
console.log (myMath.pangkat(5));