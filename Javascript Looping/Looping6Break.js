let input = prompt('Masukkan kata !');

while(true){
    input = prompt(input);
    if (input.toLowerCase() === 'stop') break;
}

alert('ok');

/* Bisa juga digunakan pada for

for (let i = 0; i <1000; i++){
    console.log(i);
    if (i === 100)
        break;
}

*/