/*
let a = true
let b = false
let c = true

console.log(a && b)
console.log(b && c)
console.log(a && c)
console.log(a && b && c)

console.log(a || b)
console.log(b || c)
console.log(a || c)
console.log(a || b || c)
*/

let nome = prompt("Qual é seu nome?")
let anoNascimento = Number(prompt("Qual o seu ano de nascimento?"))
let anoAtual = prompt("Em que ano estamos?")

let idade = anoAtual - anoNascimento
let verificarMaiorDeIdade = idade >= 18
let idadeEm2050 = 2050 - anoNascimento

console.log(`Nome: ${nome}\nIdade: ${idade}\nÉ maior de idade: ${verificarMaiorDeIdade}\nIdade em 2050: ${idadeEm2050}`)

