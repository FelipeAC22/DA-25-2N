/*let a = 10
let b = 10 
console.log(b) 

b = 5 
console.log(a, b) 
*/

// "let a = 10" declara uma variável let (que poderá ser alterada ao decorrer do código, já que não é uma constante) que recebe o nome de 'a' que recebe o valor 10 do tipo number //

// "let b = 10" declara uma variável let (que poderá ser alterada ao decorrer do código, já que não é uma constante) que recebe o nome de 'b' que recebe o valor 10 do tipo number //

// "console.log(b)" imprime no console o valor da variável 'b', neste caso, 10

// "b = 5" agora atribui à variável 'b' o valor 5 do tipo number //

// "console.log(a, b)" imprime no console os valores das variáveis 'a' e 'b', neste caso, 10 e 5 //

/*
let a = 10
let b = 20
c = a
b = c
a = b

console.log(a, b, c)
*/

// "let a = 10" declara uma variável let (que poderá ser alterada ao decorrer do código, já que não é uma constante) que recebe o nome de 'a' e atribui a ela o valor 10 do tipo number //

// "let b = 20" declara uma variável let (que poderá ser alterada ao decorrer do código, já que não é uma constante) que recebe o nome de 'b' e atribui a ela o valor 20 do tipo number //

// "c = b" declara uma variável let (que poderá ser alterada ao decorrer do código, já que não é uma constante) que recebe o nome de 'c' e atribui a ela o mesmo valor da variável 'a' //

// "b = c" agora atribui à variável 'b' o mesmo valor da variável 'c' //

// "a = b" agora atribui à variável 'a' o mesmo valor da variável 'b' //

// "console.log(a, b, c)" imprime no console o valor das variáveis 'a', 'b' e 'c', neste caso, 10, 10, 10 //







/*

let p = prompt("Quantas horas você trabalha por dia?")
let t = prompt("Quanto você recebe por dia?")
console.log("Você recebe",t,"/",p,"por hora")

// "let p" declara uma variável let (que poderá ser alterada ao decorrer do código já que não é uma constante) que tem o nome de "p" e recebe um prompt que irá gerar uma caixa de pergunta no html, depois o valor da resposta que será dada pelo usuário no prompt será armazenado nessa variável //

// "let t" declara uma variável let (que poderá ser alterada ao decorrer do código já que ela não é uma constante) que tem o nome de "t" e recebe um prompt que irá gerar uma caixa de pergunta no html, depois o valor da resposta que será dada pelo usuário no prompt será armazenado nessa variável //

// e por fim o código "console.log("Você recebe",t,"/",p,"por hora")" irá imprimir no console "Você recebe",t,"/",p,"por hora" substituindo o nome das váriaveis por seus respectivos valores (valores dados pelo usuario nos prompts) //

// nomes melhores paras variaveis ------> //

let horasPorDia = prompt("Quantas horas você trabalha por dia?")
let salarioPorDia = prompt("Quanto você recebe por dia?")
*/

/*
let nome
let idade

console.log(typeof(nome), typeof(idade))

// ^ os tipos das variáveis impressos no console são ambos 'undefined', isso ocorreu por que nenhum valor foi atribuido ou armazenado nessas variavéis, portanto, o tipo delas é indefinido //

nome = prompt("Qual é seu nome?")
idade = prompt("Qual é sua idade")

console.log(typeof(nome), typeof(idade))

// ^ os tipos das variáveis impressos no console são ambos string, isso ocorreu por que mesmo que o usuário insira um número no prompt o valor será armazenado como texto (string) na variável //

console.log("Olá", nome, "você tem", idade, "anos") // console.log imprimindo as informações do usuário //
*/

let usuarioAgasalhado = prompt("Você está usando casaco?")
let camisetaVerde = prompt("Você está usando uma camiseta verde hoje?")
let 