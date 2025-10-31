let i = 1
/*
while (i <= 10) {
    console.log(i)
    i++
}

while (i <= 20) {
    if ((i % 2) === 0) {
        console.log(i)
    }
    i++
}

let numeroEscolhido = Number(prompt("Escolha um número para fazer a sua tabuada:"))

for (let numeroTabuada = 1; numeroTabuada <= 10; numeroTabuada++) {
    console.log(`O resultado de ${numeroEscolhido} X ${numeroTabuada} é ${numeroEscolhido * numeroTabuada}`)

}
*/

let somaDeNumeros = 0

for (let numerosDigitados = 0; numerosDigitados < 5; numerosDigitados++) {
    let numeros = Number(prompt("Digite 5 números para somar:"))
    somaDeNumeros += numeros
}
console.log(`A soma dos 5 números é ${somaDeNumeros}`)


let mediaDeNotas = 0

for (let notasDigitadas = 0; notasDigitadas < 5; notasDigitadas++) {
    let notasAlunos = Number(prompt("Digite as 5 notas dos alunos para fazer a média:"))
    let somaDasNotas = 0
    somaDasNotas += notasAlunos
}
console.log(`A média `)