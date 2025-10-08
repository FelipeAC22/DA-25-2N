// atividade 1

let array // declara a váriavel array
console.log('a.', array) // imprime no console a letra a e o valor da variavel array: "a. undefined"

array = null // a variavel array recebe o valor null
console.log('b. ', array) // imprime no console a letra b e o valor da variavel array: "b. null"

array = [3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13] // a variavel array agora se torna um array e recebe a lista [3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]
console.log('c. ', array.length) // imprime no console a letra c e o valor do tamanho do array chamado array: "c. 11"

let i = 0 // declara a variavel i que recebe o valor de 0
console.log('d. ', array[i]) // imprime no console a letra d e o item de indice i do array, (i = 0) portannto: d. 3

array[i+1] = 19 // define que o item de indice i + 1 agora tem o valor de 19
console.log('e. ', array) // imprime no console a letra e e o valor de array: "e. [3, 19, 5, 6, 7, 8, 9, 10, 11, 12, 13]" 

const valor = array[i+6] // declara a constante valor, que recebe o valor do item de indice 6 do array
console.log('f. ', valor) // imprime no console a letra f e o valor da constante valor: 9


// atividade 2

const frase = prompt("Digite uma frase") // declara a constante frase que recebe um prompt que irá pedir para o usuário digitar uma frase
console.log(frase.toUpperCase().replaceAll("A", "I"), frase.length) // primeiro, imprime no console a frase que foi armazenada na constante frase com todas letras maiusculas e com todas letras A substituidas por letras I e depois imprime no console o tamanho da frase