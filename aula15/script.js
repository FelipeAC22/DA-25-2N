let quantiaDePets = Number(prompt("Quantos bichinhos você tem? "))
let pets = []

if (quantiaDePets === 0) {
    console.log("Que pena! Você pode adotar um pet!")
} else if (quantiaDePets !== 0) {
    while (pets.length < quantiaDePets) {
        let nomePet = prompt("Digite o nome de cada pet")
        pets.push(nomePet)
    }
}
console.log(pets)

let arrayOriginal = [1, 2, 3, 4, 5, 6]


for (let numero of arrayOriginal) {
    console.log(numero)
}

for (let numero of arrayOriginal) {
    console.log(numero / 10)
}

let arrayModificado = []
for (let numero of arrayOriginal) {
    if (numero % 2 === 0) {
        arrayModificado.push(numero)
    }
}
console.log(arrayModificado)

let arrayDeStrings = []
for (let i = 0; i < arrayOriginal.length; i++) {
    numero = arrayOriginal[i]
    arrayDeStrings.push(`O elemento do index ${i} é ${numero}`)
}
console.log(arrayDeStrings)

let maiorNumero = arrayOriginal[0]
let menorNumero = arrayOriginal[0]

for (let i = 0; i < arrayOriginal.length; i++) {
    if (maiorNumero < arrayOriginal[i]) {
        maiorNumero = arrayOriginal[i]
    }
    if (menorNumero > arrayOriginal[i]) {
        menorNumero = arrayOriginal[i]
    }
}
console.log(`O maior número é ${maiorNumero} e o menor é ${menorNumero}`)