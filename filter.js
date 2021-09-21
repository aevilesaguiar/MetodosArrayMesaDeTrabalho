let idades = [22,8,17,14,30,65];

let maiores = idades.filter(function(idade){
    return idade >18  && idade <60;
});

    console.log(maiores);

//remover itens duplicados
/*
    var uniqueArray = array.filter( function( elem, index, array ) {
        return array.indexOf( elem ) === index;
    } );
    */

    let nomes = ['Flavio','Fernando', 'Joseph', 'Fernanda'];
    let result = nomes.filter(function(nome){
        console.log(nome)
        return nome == 'Flavio'
    });


let cafes = ["expresso","coado","latte"];

let escolha = cafes.filter(function(opcoes){
    return opcoes
});

console.log(escolha[0]);

//R: expresso
