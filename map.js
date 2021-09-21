let numeros=[2,4,6];
let dobro=numeros.map(function(num){ // essa função por sua vez receberá um parâmetro que será os elementos do array
    return num * 2;   //nesse caso temos tres elementos no arrau, então ele retornará os valores contidos no array numeros multiplicado por 2 3 vezes
});

console.log(dobro);


let nome=['José','Maria', 'Pedro'];

let frase=nome.map(function(fraseCompleta){
    return 'Meu nome é '+ fraseCompleta;
});
console.log(frase);


const array = [2, 4, 6, 8];

function teste(e) {
    return e * 3;
}

let result = array.map(teste);
console.log(result);
