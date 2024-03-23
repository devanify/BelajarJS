/**
 * Reduce
 * melakukan proses sebanyak elemtn milik suatu array, dimana nilai baliknya adalah singgel value
 */

const subTotal = [1_500,20_000,4_000,19_000,32_000];

const total = subTotal.reduce((curentTotal,singgleSubtotal)=>{
    return curentTotal + singgleSubtotal
})

console.log(total)

const animes = [
    {
        title : 'AOT',
        rating : 90,
        year : 2023
    },
    {
        title : 'Boruto',
        rating : 80,
        year : 2023
    },
    {
        title : 'naruto',
        rating : 98,
        year : 2023
    },
    {
        title : 'naruto',
        rating : 98,
        year : 2023
    },
    {
        title : 'kimi no nawa',
        rating : 99,
        year : 2023
    }
]

//mana rating paling tinggi
const bestAnime = animes.reduce((bestAnime, curretAnime)=>{
    // console.log(bestAnime, curretAnime)
    if(curretAnime.rating > bestAnime.rating){
        return curretAnime
    }
    return bestAnime
})

console.log(bestAnime)