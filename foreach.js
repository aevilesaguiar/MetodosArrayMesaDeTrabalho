var paises= ['Brasil', 'Cuba','Peru'];

paises.forEach(function(pais){
    console.log(pais);
});

let paises2 = paises.forEach((pais)=> pais);
console.log(paises2);