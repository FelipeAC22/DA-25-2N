let numeroPensado = Number(prompt("Vamos jogar! escolha um número:"))
let numeroDeChutes = 0
let numeroChutado = -0

while (numeroChutado !== numeroPensado) {
    numeroChutado = Number(prompt("Jogador 2, tente advinhar o número:"))

    if (numeroChutado > numeroPensado) {
        console.log(`O número chutado foi: ${numeroChutado}, Errrrrrrou, o número é menor!`)
    } else if (numeroChutado < numeroPensado) {
        console.log(`O número chutado foi: ${numeroChutado}, Errrrrrrou, o número é maior`)
    } else (
        console.log(`O número chutado foi: ${numeroChutado}, Acerrrrtou, o número era ${numeroChutado}!`)
    )
    numeroDeChutes++
}
console.log(`Numero de tentativas: ${numeroDeChutes}`)