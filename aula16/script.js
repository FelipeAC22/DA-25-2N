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
*/



function arrayDividido() {
    let arrayDeNUmeros = [2, 6, 7, 10, 12]
    let novoarray = []
    novoarray.push(arrayDeNUmeros[arrayDeNUmeros.length - 1] / 2, arrayDeNUmeros[0] / 2)
    return novoarray
}

console.log(arrayDividido())