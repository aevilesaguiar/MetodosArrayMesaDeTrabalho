//find
//retorna o primeiro valor que cumprir a cons=diçã espaecificada na callback. A callback retorna true ou false

let moedas = [
    {nome:'Bitcoin', simbolo:'BTC'},
    {nome:'Bitcoin', simbolo:'BTC'},
    {nome:'Ethereum', simbolo:'ETH'},
    {nome:'Cardano', simbolo:'EDA'},
]

moedas.find(
    function (moeda){
        return moeda.nome === 'Bitcoin';
    }
);

console.log(moedas);