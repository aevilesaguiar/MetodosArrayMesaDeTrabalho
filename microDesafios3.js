//Crie um array de números e utilize a função .reduce() para devolver uma string com os números formatados.

let numeros = [1,6,5,7,16,20,89];

let numerosFormatados = numeros.reduce((acumulador, nFormatado) => acumulador + " - " + nFormatado)

console.log(numerosFormatados);