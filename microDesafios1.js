//Crie um array de números pares, e utilizando a função .map() nesse array, crie um novo array com apenas números ímpares.

let numPares = [2,4,6,8];

let impar = numPares.map(function(impar){
            return impar+1;
})

console.log(impar);