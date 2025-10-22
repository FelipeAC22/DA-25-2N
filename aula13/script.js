/*DESAFIO 1*/

// aqui temos constantes com valores definidos para cada material de ferramenta com seus respectivos valores de velocidade //

const velocidadeMadeira = 30
const velocidadePedra = 60
const velocidadeFerro = 90
const velocidadeDiamante = 100

// variavel com valor definido que vai receber o bloco que queremos quebrar//

let blocoMinerar = "minério de diamante"

// estrutura de condicional para determinar qual picareta deve ser usada de acordo com a variavel let blocoMinerar //
// ela irá imprimir no console o resultado e o valor da velocidade dapicareta que deve ser usada //

if (blocoMinerar.toUpperCase() === "MINÉRIO DE DIAMANTE" || blocoMinerar.toUpperCase() === "OBSIDIANA") {
    console.log(`Use a picareta de diamante: Velocidade ${velocidadeDiamante}`)
} else if (blocoMinerar.toLocaleUpperCase() === "PEDRA") {
    console.log(`A picareta de ferro ou pedra é o ideal: Velocidade ferro: ${velocidadeFerro}, velocidade pedra: ${velocidadePedra}`)
} else {
    console.log("Qualquer ferramenta funciona, mas a de Madeira a mais simples!")
}

/*DESAFIO 2*/

// variaveis de dano e hp com valores definidos com os status de dano própio e de defesa inimiga //

let danoEspada = 6
let forcaEncatamento = 1.5
let armaduraInimiga = 2
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
let nivelMesaCrafting = 2
const temGravetos = false
let temFerro = 10

// estrutura de condicional para determinar se é possivel craftar uma picareta de diamante de acordo com as condições //
// essa estrutura irá retornar o resultado das comparações //

if ((temGravetos === true || nivelMesaCrafting < 3) && (temDiamantes === true && temFerro >= 8)) {
    console.log("Picareta de diamante criada! Hora de buscar obsidiana!")
} else {
    console.log("Faltam recursos ou as condições de crafting não estão sendo atendidas!")
}





