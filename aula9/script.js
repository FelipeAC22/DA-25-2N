// atividade 1 
/*
let nome = prompt("Qual é seu nome?")
let corFavorita = prompt("Qual é a sua cor favorita?")
console.log("A cor favorita de " + nome + " é " + corFavorita)

nome = prompt(`Qual é seu nome?`)
corFavorita = prompt(`Qual é a sua cor favorita?`)
console.log(`A cor favorita de ${nome} é ${corFavorita}`)

// atividade 2 

let frase = prompt("Escreva uma frase qualquer:")

console.log(`frase com letras maiúsculas: ${frase.toUpperCase()}`)
console.log(`frase substituindo todas as letras "o" por "i": ${frase.replaceAll("o", "i")}`)
console.log(`tamanho da frase: ${frase.length}`)


// atividade 3 

let racasDeCachorros = ["Pug", "Shih Tzu", "Pastor Alemão", "Rottweiler", "Caramelo"]
let numeroEscolhido = Number(prompt("Digite um número de 0 a 4:"))

console.log(`Raça de cahorro correspondente ao número escolhido: ${racasDeCachorros[numeroEscolhido]}`)
*/





// atividade 4 

let arrayDeNumeros = [1, 2, 3, 4, 5, 6]

console.log(`\narray original: ${arrayDeNumeros}`)
console.log(`Tamanho do array original: ${arrayDeNumeros.length}\n`)

arrayDeNumeros.push(7)
arrayDeNumeros.splice(3, 2)

console.log(`Array depois das alterações: ${arrayDeNumeros}`)
console.log(`Tamanho do array depois das alterações: ${arrayDeNumeros.length}`)
