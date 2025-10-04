// Desafio 1 //

// K = C + 273.15
// C = K - 273.15

// F = 9 / 5 * (C + 32)
// C = 5 / 9 * (F - 32)

// K = 5 / 9 * (F - 32) + 273.15
// F = 9 / 5 * (K - 273.15) + 32

// primeiro conversão //
/*
let fahrenheit = 77
console.log(`O valor de 77°F em graus Kelvin é: ${5 / 9 * (fahrenheit - 32) + 273.15}°K`)

// segunda conversão //

let celsius = 80
console.log(`O valor de 80°C em graus Fahrenheit é: ${9 / 5 * (celsius + 32)}°F`)

// terceira conversão //

celsius = 30
console.log(`O valor de 30°C em graus fahrenheit e kelvin são respectivamente: ${9 / 5 * (celsius + 32)}°F, ${celsius + 273.15}°K`)

// conversão com prompt //

celsius = Number(prompt("Digite o número em graus celsius que você deseja converter para graus fahrenheit e kelvin:"))
console.log(`O valor de ${celsius}°C em graus fahrenheit e kelvin são respectivamente: ${9 / 5 * (celsius + 32)}°F, ${celsius + 273.15}°K`)
*/



let valorQuillowatHora = 0.05
let consumoResidencia = 280
let valorPago = consumoResidencia * valorQuillowatHora

console.log(`O valor que deve ser pago pelo consumo de ${consumoResidencia} quillowat-hora será de: R$${valorPago}`)

let porcentagemDesconto = 15 / 100
let desconto = valorPago * porcentagemDesconto
let valorFinalPago = valorPago - desconto

console.log(`Depois de aplicado o desconto de 15% o valor final que deve ser pago será de: R$${valorFinalPago}`)


/*
let libras = 20
let lbParaKg = libras * 0.453592
console.log(`${libras} libras equivalem à ${lbParaKg} quilos`)

let oncas = 10.5
let ozParaKg = oncas * 0.0283495
console.log(`${oncas} onças equivalem à ${ozParaKg} quilos`)

let milhas = 100
let miParaMetros = milhas * 1609.344
console.log(`${milhas} milhas equivalem à ${miParaMetros} metros`)

let pes = 50
let ftParaMetros = pes * 0.3048
console.log(`${pes} pés equivalem à ${ftParaMetros} metros`)

let galao = 103.56
let galParaLitros = galao * 3.7854
console.log(`${galao} galões equivalem à ${galParaLitros} litros`)

let xicara = 450
let xicParaLitros = xicara * 0.24
console.log(`${xicara} xicaras equivalem à ${xicParaLitros} litros`)

// prompt do usuario //

libras = Number(prompt("digite o peso em libras(Lb) que deseja converter para quilos(Kg):"))
lbParaKg = libras * 0.453592
console.log(`${libras} libras equivalem à ${lbParaKg} quilos`)
*/