//ex1//

const nome = " Felipe Antunes Cardoso "

console.log(nome.length)

let frase = "OlaAaAA"
let fraseMinuscula = frase.toLowerCase()
let fraseMaiuscula = frase.toUpperCase()

console.log(fraseMaiuscula, fraseMinuscula)

//ex2//

console.log(nome)
console.log(nome.trim())

//ex3//

let fraseCenoura = "Hoje comi cenoura, adoro cenoura"

console.log(fraseCenoura.includes("cenoura"))
console.log(fraseCenoura.includes("batata"))

//ex4//

let novaFrase = fraseCenoura.replaceAll("cenoura", "batata")
console.log(novaFrase)

//ex5//

let listaDeCompras = ["Abacate", "Banana", "Tomate"]
console.log(listaDeCompras[1])

//ex6//

let pokemon = ["Mewtwo", "Eternatus", "Blastoise", "Rayquaza", "Hoopa", "Giratina"]
console.log(pokemon.length)

//ex7//

let seriesBoas = ["Dexter", "Supernatural", "Mr. robot"]
console.log(seriesBoas.includes("Supernatural"))

//ex8//

let numeros = [1, 2, 3]
console.log(numeros)

numeros.push(4, 5, 6)
console.log(numeros)

//ex9//

let meusPeixes = ["Palhaço", "Mandarim", "Esturjão"]
meusPeixes.pop()
console.log(meusPeixes)
meusPeixes.pop()
console.log(meusPeixes)

//ex10//

let letras = ["A", "B", "C", "D", "E", "F","G","H"]
letras.splice(2, 1)
console.log(letras)

letras.splice(3, 2)
console.log(letras)
