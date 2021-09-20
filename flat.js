//flat
//este método é usado para desembrulhar sub-arrays dentro de arrays, ou seja ele não modifica o array original

let numeros = [1,2,3,[4],[[5,6]]];

let novoArray = numeros.flat();
console.log(novoArray)

novoArray=numeros.flat(2);