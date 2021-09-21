let numeros = [5,7,16];

let soma = numeros.reduce(function(acumulador, numero){
    console.log(acumulador,numero);
    return acumulador + numero;
    
})

console.log(soma);


//com reduce eu posso concatenar string
var string = ['V','A','I',' ','C','O','R','I','N','T','H','I','A','S'];

    var reduce = string.reduce(function(acumulado, atual){
        return acumulado + atual;
    });
    console.log( reduce, string );



