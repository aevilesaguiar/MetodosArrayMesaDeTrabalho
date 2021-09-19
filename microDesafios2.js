//Crie um array de nomes, que possua dois índices com o nome Maria. Utilize o .filter() para obter apenas esses dois índices com o nome Maria.

let nomes = ['Maria','Maria','Pedro','Paulo','Mateus'];

let nomesMaria = nomes.filter(function(nome){
    return nome == 'Maria';
});

    console.log(nomesMaria);