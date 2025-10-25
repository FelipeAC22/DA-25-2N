/*
let i = 1
let somaDeNumeros = 0

while (i !== 0) {
    let numeroUsuario = Number(prompt("Insira um número: (Digite 0 para encerrar)"))
    somaDeNumeros += numeroUsuario

    i = numeroUsuario
}

console.log(`Soma dos números digitados: ${somaDeNumeros}`)
*/

meuArray = [11, 15, 18, 14, 12, 13]
let maiorNumero = 0

for (let i = 0; i < meuArray.length; i++) {
    if (maiorNumero < meuArray[i]) {
        maiorNumero = meuArray[i]
    }
}
console.log(`o maior número é ${maiorNumero}`)