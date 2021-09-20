//includes()
//verifica a existencia de um elemento array, retornando true caso exista e false se não.

let numeros = [3,4,5,6,7];

let existe = numeros.includes(4);

console.log(existe);

existe = numeros.includes(1,2);
console.log(existe);