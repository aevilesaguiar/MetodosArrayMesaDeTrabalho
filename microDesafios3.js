//Crie um array de números e utilize a função .reduce() para devolver uma string com os números formatados.

let numeros = [1,6,5,7,16,20,89];

let numerosFormatados = numeros.reduce((acumulador, nFormatado) => acumulador + " - " + nFormatado)

console.log(numerosFormatados);

let nomes= [' Agora eu era o herói','E o meu cavalo só falava inglês','A noiva do cowboy','Era você, além das outras três','Eu enfrentava os batalhões'];

let letraMusica = nomes.reduce((acumulador, nFormatado) => acumulador + ". \n " + nFormatado)

console.log(letraMusica);