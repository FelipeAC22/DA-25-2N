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

