// atividade 1 //

const bool1 = true // declara a constante bool1 que recebe o valor booleano de true
const bool2 = false // declara a constante bool2 que recebe o valor booleano false
const bool3 = !bool2 // declara a constante bool3 que recebe o valor da variavel !bool2 e o operador lógico ! inverte o valor da variavel de false para true

let resultado = bool1 && bool2 // declara a variável resultado que recebe o valor da operação lógica E: bool1 && bool2, que retornará false pois a const bool2 tem o valor de false
console("a. ", resultado) // imprime no console a letra "a." e o valor da variável resultado, que será false 

resultado = bool1 && bool2 && bool3 // determina que o novo valor da variável resultado será o valor retornado da operação lógia E: bool1 && bool2 && bool3, que retornará false, ja que bool2 tem o valor de false
console.log("b. ", resultado) // imprime no console a letra "b." e o valor da variável resultado, que será false

resultado = !resultado && (bool1 || bool2) // determina que o novo valor da variável resultado será o contrário do valor retornado pela operação lógica OU: bool1 || bool2, que retornará true, ja que || verifica se uma das variáveis é verdadeira, no caso bool1
console.log("c. ", resultado) // imprime no console a letra "c." e o valor da variável resultado, que será true

console.log("d. ", typeof resultado) // imprime no console a letra "d." e o tipo da variável resultado, que será boolean


// atividade 2 //

let primeiroNumero = prompt("Digite um número!") 

let segundoNumero = prompt("Digite outro número!") 

const soma = primeiroNumero + segundoNumero

console.log(soma) 

// como o prompt armazena os inputs como strings, o programa irá retornar a concatenaçãodas variavéis //

