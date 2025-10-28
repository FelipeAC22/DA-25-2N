/*
let i = 1
let somaDeNumeros = 0

while (i !== 0) {
    let numeroUsuario = Number(prompt("Insira um número: (Digite 0 para encerrar)"))
    somaDeNumeros += numeroUsuario

    i = numeroUsuario
}

console.log(`Soma dos números digitados: ${somaDeNumeros}`)


meuArray = [11, 15, 18, 14, 12, 13]
let maiorNumero = 0

for (let i = 0; i < meuArray.length; i++) {
    if (maiorNumero < meuArray[i]) {
        maiorNumero = meuArray[i]
    }
}
console.log(`O maior número é ${maiorNumero}`)

meuArray2 = [11, 15, 18, 14, 12, 13]
let somaDePares = 0

for (i = 0; i < meuArray2.length; i++) {
    if ((meuArray2[i] % 2) === 0) {
        somaDePares += meuArray2[i]
    }
}
console.log(`A soma dos números pares é ${somaDePares}`)

// exercicio for of //

let mensagemEstranha = ["Oi", "sumido", "tudo", "bem?", "Saudades"]
let frase = ""

for (let i of mensagemEstranha) {
    frase = frase + " " + i
}
console.log(frase)

let arrayDeNumeros1 = [11, 15, 18, 14, 12, 13]
let somaDeNumeros2 = 0

for (const i of arrayDeNumeros1) {
    if ((i % 2) === 0) {
        somaDePares2 += i
    }
}
console.log(`A somas dos numeros pares é ${somaDePares2}`)

let palavras = ["Bolachas", "Bola", "Carro", "Biscoito", "Anel"]
let palavrasMaisLongas = []
let maiorComprimento = 0

for (let i of palavras) {
    if (i.length > maiorComprimento) {
        maiorComprimento = i.length
        palavrasMaisLongas.splice(0, 1, i)
    } else if (i.length === maiorComprimento) {
        palavrasMaisLongas.push(i)
    }
}

console.log(palavrasMaisLongas)
*/