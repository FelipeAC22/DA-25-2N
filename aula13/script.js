/*DESAFIO 2*/

// variaveis de dano e hp com valores definidos para calcular o combate //

let danoEspada = 6
let forcaEncatamento = 1.5
const armaduraInimiga = 2
let vidaInimiga = 20

// constantes para calcular o dano bruto e o dano final causado (dano resultante depois da defesa do inimigo) //
// elas iram armazenar os valores resultantes das operações e serão usadas no código para determinar a vida do inimigo //

const danoBruto = danoEspada * forcaEncatamento
const danoFinal = danoBruto - armaduraInimiga

// aqui diminuimos a vida do creeper pelo valor do dano final causado //

vidaInimiga -= danoFinal

// aqui criamos uma estrutura condicional para verificar se o creeper ainda está vivo, que também imprime no console o resultado //

if (vidaInimiga <= 0) {
    console.log("O creeper foi derrotado! Você sobreviveu a explosão!")
} else {
    console.log(`O creeper ainda está vivo com ${vidaInimiga} de vida. Corra!`)
}

/*DESAFIO 3*/

// constantes e variaveis com valores definidos para o craft //

const temDiamantes = true
const nivelMesaCrafting = 2
const temGravetos = false
const temFerro = 10

// estrutura de condicional para determinar se é possivel craftar uma picareta de diamante de acordo com as condições //
// essa estrutura irá retornar o resultado das comparações //

if ((temGravetos === true || nivelMesaCrafting < 3) && (temDiamantes === true && temFerro >= 8)) {
    console.log("Picareta de diamante criada! Hora de buscar obsidiana!")
} else {
    console.log("Faltam recursos ou as condições de crafting não estão sendo atendidas!")
}





