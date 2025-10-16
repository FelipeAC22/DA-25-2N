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

let alunaHogwarts = prompt(`Digite o nome do aluno(a):`)

switch (alunaHogwarts.toUpperCase()) {
    case "HERMIONE":
        console.log("você escolheu Hermione! casa de Hogwarts: Grifinória")
        break;
    case "ANA":
        console.log("Você escolheu Ana! casa de Hogwarts: Lufa-lufa")
        break;
    case "LUNA":
        console.log("Você escolheu Luna! casa de Hogwarts: Corvinal")
        break;
    case "NARCISA":
        console.log("Você escolheu Narcisa! casa de Hogwarts: Sonserina")
        break;
    default:
        console.log("Personagem não encontrado, digite corretamente!")
        break;
}


// exerc. 6

let ensinoMedio = prompt("Você concluiu o Ensino Médio? (Sim/Não)")
let idade = Number(prompt("Digite a sua idade:"))
let cursandoFaculdade = prompt("Você está cursando outra faculdade? (Sim/Não)")

if ((ensinoMedio.toUpperCase() === "SIM") && (idade >= 18) && (cursandoFaculdade.toUpperCase() === "NÃO" || cursandoFaculdade.toUpperCase() === "NAO")) {
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

let escolhaComputador = (Math.floor(Math.random() * 5)) + 1
let movimentoInimigo

switch (escolhaComputador) {
    case 1:
        movimentoInimigo = "Pedra"
        break;
    case 2:
        movimentoInimigo = "Papel"
        break;
    case 3:
        movimentoInimigo = "tesoura"
        break;
    case 4:
        movimentoInimigo = "lagarto"
        break;
    case 5:
        movimentoInimigo = "Spock"
        break;
}

console.log(`O inimigo escolheu ${movimentoInimigo}!`)
switch (`${PedraPapelTesoura}-${escolhaComputador}`) {
    case "1-1":
        console.log("Ambos escolheram pedra! Empate!")
        break;
    case "1-2":
        console.log("Você escolheu pedra e pedra é coberta por papel! Derrota!")
        break;
    case "1-3":
        console.log("Você escolheu pedra e pedra esmaga tesoura! Vitória!")
        break;
    case "1-4":
        console.log("Você escolheu pedra e pedra esmaga lagarto! Vitória!")
        break;
    case "1-5":
        console.log("Você escolheu pedra e pedra é vaporizada por spock! Derrota!")
        break;
    case "2-1":
        console.log("Você escolheu papel e papel cobre pedra! Vitória!")
        break;
    case "2-2":
        console.log("ambos escolheram papel! Empate!")
        break;
    case "2-3":
        console.log("Você escolheu papel e papel é cortado por tesoura! Derrota ")
        break;
    case "2-4":
        console.log("Você escolheu papel e o papel é engolido pelo lagarto! Derrota")
        break;
    case "2-5":
        console.log("Você escolheu papel e o papel desqualifica o spock! Vitória!")
        break;
    case "3-1":
        console.log("Você escolheu tesoura e tesoura é esmagada por pedra! Derrota!")
        break;
    case "3-2":
        console.log("Você escolheu tesoura e tesoura corta o papel! Vitória!")
        break;
    case "3-3":
        console.log("Ambos escolheram tesoura! Empate!")
        break;
    case "3-4":
        console.log("Você escolheu tesoura e tesoura decapita o largarto! Vitória!")
        break;
    case "3-5":
        console.log("Você escolheu tesoura e tesoura é quebrada pelo spock! Derrota")
        break;
    case "4-1":
        console.log("Você escolheu lagarto e lagarto é esmagado por pedra! Derrota!")
        break;
    case "4-2":
        console.log("Você escolheu lagarto e lagarto come papel! Vitória!")
        break;
    case "4-3":
        console.log("Você escolheu lagarto e lagarto é decapitado por tesoura! Derrota!")
        break;
    case "4-4":
        console.log("Ambos escolheram lagarto! Empate!")
        break;
    case "4-5":
        console.log("Você escolheu lagarto e lagarto envenena o spock! Vitória!")
        break;
    case "5-1":
        console.log("Você escolheu spock e spock vaporiza pedra! Vitória!")
        break;
    case "5-2":
        console.log("Você escolheu spock e spock é desqualificado por papel! Derrota!")
        break;
    case "5-3":
        console.log("Você escolheu spock e spock quebra tesoura! Vitória!")
        break;
    case "5-4":
        console.log("Você escolheu spock e spock é envenenado por lagarto! Derrota!")
        break;
    case "5-5":
        console.log("Ambos escolheram spock! Empate!")
        break;
    default:
        console.log("movimento nao encontrado, tente novamente!")
        break;
}
