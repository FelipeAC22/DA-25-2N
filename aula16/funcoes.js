/*
function boasVindas() {
    console.log("Bem vindo a turma 25-2N")
}

boasVindas()

function somaDeNumeros() {
    let resultado = 4 + 5
    console.log(`O resultado da soma é: ${resultado}`)
}

somaDeNumeros()

function dobroDeNumeros() {
    let numero = 5
    let numeroDobrado = numero * 2
    console.log(`o dobro de ${numero} é ${numeroDobrado}`)
}

dobroDeNumeros()

function mensagem(nome) {
    console.log(`Olá ${nome}`)
}

mensagem("Felipe Cardoso")
mensagem("Carlos Alberto")
mensagem("Linus Torvalds")

function soma(num1, num2) {

    let soma = num1 + num2
    console.log(`A soma é ${soma}`)
}

soma(15, 10)

let numeros = [8, 8]
soma(...numeros)

function soma(num1, num2) {
    let soma = num1 + num2
    return soma
}

let somaDeNumeros = soma(2, 2)

console.log(`A soma dos números é ${somaDeNumeros}`)

let arrayDeNUmeros = [2, 6, 7, 10, 12]

function divisao(array) {
    return novoArray = [arrayDeNUmeros[arrayDeNUmeros.length - 1] / 2, arrayDeNUmeros[0] / 2]
}

console.log(divisao(arrayDeNUmeros))

let somarNumeros = function () {
    let num1 = 2
    let num2 = 2
    return `A soma é ${num1 + num2}`
}

console.log(somarNumeros())


let dobrarNumeros = () => {
    let num1 = 10
    return `O dobro de ${num1} é ${num1 * 2}`
}

console.log(dobrarNumeros())
*/

function determinaMonstro(temPeleGelada, transformaComLuaCheia, brilhaAoSol, temSedeDeSangue) {
    if (temPeleGelada && temSedeDeSangue || brilhaAoSol) {
        return "Vampiro"
    } else if (transformaComLuaCheia) {
        return "Lobisomen"
    } else if (temPeleGelada === false && transformaComLuaCheia === false && brilhaAoSol === false && temSedeDeSangue === false) {
        return "Humano"
    } else {
        return "Qualquer coisa, menos humano"
    }
}

console.log(determinaMonstro(false, false, false, false))