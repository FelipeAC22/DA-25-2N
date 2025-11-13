const filme = {
    nome: "Auto da Compadecida",
    ano: 2000,
    elenco: [
        "Matheus Nachtergaele", "Selton Mello", "Denise Fraga", "Virginia Cavendish"
    ],
    transmissoesHoje: [
        { canal: "Telecine", horario: "21h" },
        { canal: "Canal Brasil", horario: "19h" },
        { canal: "Globo", horario: "14h" }
    ]
}

console.log(filme.elenco[0])
console.log(filme.elenco[filme.elenco.length - 1])
console.log(filme.transmissoesHoje[2])

// o que vai ser impresso? //

// Matheus Nachtergaele
// Virginia Cavendish
// { canal: "Globo", horario: "14h" }


const cachorro = {
    nome: "Juca",
    idade: 3,
    raca: "SRD"
}

const gato = { ...cachorro, nome: "Juba" }

const tartaruga = { ...gato, nome: gato.nome.replaceAll("a", "o") }

console.log(cachorro)
console.log(gato)
console.log(tartaruga)

// o que vai ser impresso no console? //

/*
{nome: "Juca", idade: 3, raca: "SRD"}
{nome: "Juba", idade: 3, raca: "SRD"}
{nome: "Jubo", idade: 3, raca: "SRD"}
*/

// o que faz a sintaxe dos 3 pontos antes do nome de um objeto? //

// essa sintaxe se chama espalhamento e irá copiar as propiedades de um objeto


function minhaFuncao(objeto, propiedade) {
    return objeto[propiedade]
}

const pessoa = {
    nome: "Caio",
    idade: 23,
    backender: false
}

console.log(minhaFuncao(pessoa, "backender"))
console.log(minhaFuncao(pessoa), "altura" )

// o que vai ser impresso no console? //

// false
// undefined altura

// isso aconteceu porque a função tentou buscar uma propiedade que não existe e acabou imprimindo tambem o valor que foi usado para busca 
