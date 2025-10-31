let numeroPensado = Math.floor(Math.random() * 101)
let numeroDeChutes = 0
let numeroChutado = -0

while (numeroChutado !== numeroPensado) {
    numeroChutado = Number(prompt("Usuario, tente advinhar o número escolhido aleatoriamente:"))

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

/*
A aleração do código que eu fiz para que o própio código escolhesse um numero "aleatorio" foi bastante simples.

Para permitir que o codigo fizesse isso bastou retirar o prompt da variavel numeroPensado e substitui-lo
pela função Math.floor(Math.random() * 101) onde:
'math.random() * 101' gera um numero aleatorio de 0 a 100
'math.floor()' arrendonda esse numero ja que math.random não gera um numero inteiro 
*/