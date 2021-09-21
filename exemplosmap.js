//Converter temeratura para farenheite
let fahrenheite = [0,32,45,50,75,80,99,120];

var celcius = fahrenheite.map(function(elemento){
    return Math.round((elemento-32)*5/9);//função retorna o valor de um número arredondado para o inteiro mais próximo
});

console.log(celcius)


var celcius2= fahrenheite.map((elemento)=>Math.round((elemento-32)*5/9));

console.log(celcius2);