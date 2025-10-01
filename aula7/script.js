// atividade 1 //
/*
let calculo1 = 3 + 4
let calculo2 = (3 * 5) / 2
let calculo3 = (5 - 4) * -1
let calculo4 = 234 % 5

console.log(calculo1, calculo2, calculo3, calculo4)
*/
// atividade 2 //

let primeiroNumero = prompt("Digite o primeiro número que deseja comparar:")
let segundoNumero = prompt("DIgite o segundo número que deseja comparar:")

let igualdade = primeiroNumero === segundoNumero
let diferenca = primeiroNumero !== segundoNumero
let maiorQue = primeiroNumero > segundoNumero
let menorQue = primeiroNumero < segundoNumero

console.log("O primeiro numero é igual ao segundo?", igualdade)
console.log("O primeiro numero é diferente que o segundo?", diferenca)
console.log("O primeiro numero é maior que o segundo?", maiorQue)
console.log("O primeiro numero é menor que o segundo?", menorQue)