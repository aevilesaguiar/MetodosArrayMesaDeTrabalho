//sort
//nos ajuda a ordenar os elementos de um array

let marcas = ['sansung','xiaomi','apple'];

console.log(marcas.sort());

let numeros = [10,3,4,52,6,0,1548];

let dados = numeros.sort(function(a,b){
    return a-b;
});
console.log(numeros)
console.log(dados)