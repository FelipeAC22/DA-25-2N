// exerc. 1
/*
let num1 = Number(prompt("Digite o primeiro número:"))
let num2 = Number(prompt("Digite o segundo numero:"))

if (num1 === num2) {
    console.log("Passou! Os seus números são iguais")
}


// exerc. 2

num1 = Number(prompt("Digite o primeiro número:"))
num2 = Number(prompt("Digite o segundo numero:"))

if (num1 === num2) {
    console.log("Os seus números são iguais!")
} else {
    console.log("Os seus números são diferentes!")
}

// exerc. 3

num1 = Number(prompt("Digite o primeiro número:"))
num2 = Number(prompt("Digite o segundo numero:"))

if (num1 > num2) {
    console.log("O primeiro número é maior que o segundo!")
} else if (num1 < num2) {
    console.log("O primeiro número é menor que o segundo!")
} else {
    console.log("O primeiro número é igual ao segundo!")
}

// exerc. 4

let pokemonInicial = prompt("Escolha entre Bulbasaur, Squirtle, Charmander:")

switch (pokemonInicial.toUpperCase()) {
    case "BULBASAUR":
        console.log("Tipagem do Bulbasaur: Planta e veneno")
        break;
    case "CHARMANDER":
        console.log("Tipagem do Charmander: Fogo")
        break;
    case "SQUIRTLE":
        console.log("Tipagem do Squirtle: Água")
        break;
    default:
        console.log("Escreva novamente!")
}

// exerc. 5

let alunaHogwarts = Number(prompt(`
Escolhe o nome pelo seu respectivo número:

(1) Hermione
(2) Ana
(3) Luna
(4) Narcisa`))

switch (alunaHogwarts) {
    case 1:
        console.log("você escolheu Hermione! casa de Hogwarts: Grifinória")
        break;
    case 2:
        console.log("Você escolheu Ana! casa de Hogwarts: Lufa-lufa")
        break;
    case 3:
        console.log("Você escolheu Luna! casa de Hogwarts: Corvinal")
        break;
    case 4:
        console.log("Você escolheu Narcisa! casa de Hogwarts: Sonserina")
    default:
        console.log("Escolha um número válido!")
}


// exerc. 6

let ensinoMedio = prompt("Você concluiu o Ensino Médio? (s/n)")
let idade = Number(prompt("Digite a sua idade:"))
let cursandoFaculdade = prompt("Você está cursando outra faculdade? (s/n)")

if ((ensinoMedio.toUpperCase() === "S") && (idade >= 18) && (cursandoFaculdade.toUpperCase() === "N")){
console.log("Parabéns, você pode fazer essa faculdade!")
} else {
    console.log("Você não pode fazer essa faculdade!")
}
*/

// DESAFIO

let PedraPapelTesoura = Number(prompt(`
Escolha seu movimento:
(1) Pedra 
(2) Papel
(3) Tesoura
(4) Lagarto 
(5) Spock
`))

let escolhaComputador = choices[Math.floor(Math.random() * 5)]
let movimentoInimigo

switch (escolhaComputador) {
    case 1:
        movimentoInimigo = "Pedra"
        break;
    case 2:
        movimentoInimigo = "Papel"
        break;
    case 3:
        movimentoInimigo = "Tesoura"
        break;
    case 4:
        movimentoInimigo = "Lagarto"
        break;
    case 5:
        movimentoInimigo = "Spock"
        break;
}

console.log(`O inimigo escolheu ${movimentoInimigo}!`)
switch (PedraPapelTesoura, escolhaComputador) {
    case PedraPapelTesoura === 1 && escolhaComputador === 1:
        console.log("Ambos escolheram pedra! Empate!")
        break;
    case PedraPapelTesoura === 1 && escolhaComputador === 2:
        console.log("Você escolheu pedra e pedra é coberta por papel! Derrota!")
        break;
    case PedraPapelTesoura === 1 && escolhaComputador === 3:
        console.log("Você escolheu pedra e pedra esmaga tesoura! Vitória!")
        break;
    case PedraPapelTesoura === 1 && escolhaComputador === 4:
        console.log("Você escolheu pedra e pedra esmaga lagarto! Vitória!")
        break;
    case PedraPapelTesoura === 1 && escolhaComputador === 5:
        console.log("Você escolheu pedra e pedra é vaporizada por spock! Derrota!")
        break;
    case PedraPapelTesoura === 2 && escolhaComputador === 1:
        console.log("Você escolheu papel e papel cobre pedra! Vitória!")
        break;
    case PedraPapelTesoura === 2 && escolhaComputador === 2:
        console.log("Ambos escolheram papel! Empate!")
        break;
    case PedraPapelTesoura === 2 && escolhaComputador === 3:
        console.log("Você escolheu papel e papel é cortado por tesoura! Derrota ")
        break;
    case PedraPapelTesoura === 2 && escolhaComputador === 4:
        console.log("Você escolheu papel e o papel é engolido pelo lagarto! Derrota")
        break;
    case PedraPapelTesoura === 2 && escolhaComputador === 5:
        console.log("Você escolheu papel e o papel desqualifica o spock! Vitória!")
        break;
    case PedraPapelTesoura === 3 && escolhaComputador === 1:
        console.log("Você escolheu tesoura e tesoura é esmagada por pedra! Derrota!")
        break;
    case PedraPapelTesoura === 3 && escolhaComputador === 2:
        console.log("Você escolheu tesoura e tesoura corta o papel! Vitória!")
        break;
    case PedraPapelTesoura === 3 && escolhaComputador === 3:
        console.log("Ambos escolheram tesoura! Empate!")
        break;
    case PedraPapelTesoura === 3 && escolhaComputador === 4:
        console.log("Você escolheu tesoura e tesoura decapita o largarto! Vitória!")
        break;
    case PedraPapelTesoura === 3 && escolhaComputador === 5:
        console.log("Você escolheu tesoura e tesoura é quebrada pelo spock")
        break;
    case PedraPapelTesoura === 4 && escolhaComputador === 1:
        console.log("Você escolheu lagarto e lagarto é esmagado por pedra! Derrota!")
        break;
    case PedraPapelTesoura === 4 && escolhaComputador === 2:
        console.log("Você escolheu lagarto e lagarto come papel! Vitória!")
        break;
    case PedraPapelTesoura === 4 && escolhaComputador === 3:
        console.log("Você escolheu lagarto e lagarto é decapitado por tesoura! Derrota!")
        break;
    case PedraPapelTesoura === 4 && escolhaComputador === 4:
        console.log("Ambos escolheram lagarto! Empate!")
        break;
    case PedraPapelTesoura === 4 && escolhaComputador === 5:
        console.log("Você escolheu lagarto e lagarto envenena o spock! Vitória!")
        break;
    case PedraPapelTesoura === 5 && escolhaComputador === 1:
        console.log("Você escolheu spock e spock vaporiza pedra! Vitória!")
        break;
    case PedraPapelTesoura === 5 && escolhaComputador === 2:
        console.log("Você escolheu spock e spock")
        break;
    case PedraPapelTesoura === 5 && escolhaComputador === 3:
        console.log("")
        break;
    case PedraPapelTesoura === 5 && escolhaComputador === 4:
        console.log("")
        break;
    case PedraPapelTesoura === 5 && escolhaComputador === 5:
        console.log("")
        break;
    default:
        break;
}