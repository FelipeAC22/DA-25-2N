// atividade 1 //

let a1 = 10
let b1 = 10 
console.log(b1) 

b1 = 5 
console.log(a1, b1) 

// "let a = 10" declara uma variável let (que poderá ser alterada ao decorrer do código, já que não é uma constante) que recebe o nome de 'a' que recebe o valor 10 do tipo number //

// "let b = 10" declara uma variável let (que poderá ser alterada ao decorrer do código, já que não é uma constante) que recebe o nome de 'b' que recebe o valor 10 do tipo number //

// "console.log(b)" imprime no console o valor da variável 'b', neste caso, 10

// "b = 5" agora atribui à variável 'b' o valor 5 do tipo number //

// "console.log(a, b)" imprime no console os valores das variáveis 'a' e 'b', neste caso, 10 e 5 //


// atividade 2 //

let a2 = 10
let b2 = 20
c2 = a2
b2 = c2
a2 = b2

console.log(a2, b2, c2)

// "let a = 10" declara uma variável let (que poderá ser alterada ao decorrer do código, já que não é uma constante) que recebe o nome de 'a' e atribui a ela o valor 10 do tipo number //

// "let b = 20" declara uma variável let (que poderá ser alterada ao decorrer do código, já que não é uma constante) que recebe o nome de 'b' e atribui a ela o valor 20 do tipo number //

// "c = b" declara uma variável let (que poderá ser alterada ao decorrer do código, já que não é uma constante) que recebe o nome de 'c' e atribui a ela o mesmo valor da variável 'a' //

// "b = c" agora atribui à variável 'b' o mesmo valor da variável 'c' //

// "a = b" agora atribui à variável 'a' o mesmo valor da variável 'b' //

// "console.log(a, b, c)" imprime no console o valor das variáveis 'a', 'b' e 'c', neste caso, 10, 10, 10 //



// atividade 3 //

let p3 = prompt("Quantas horas você trabalha por dia?")
let t3 = prompt("Quanto você recebe por dia?")
console.log("Você recebe",t3,"/",p3,"por hora")

// "let p" declara uma variável let (que poderá ser alterada ao decorrer do código já que não é uma constante) que tem o nome de "p" e recebe um prompt que irá gerar uma caixa de pergunta no html, depois o valor da resposta que será dada pelo usuário no prompt será armazenado nessa variável //

// "let t" declara uma variável let (que poderá ser alterada ao decorrer do código já que ela não é uma constante) que tem o nome de "t" e recebe um prompt que irá gerar uma caixa de pergunta no html, depois o valor da resposta que será dada pelo usuário no prompt será armazenado nessa variável //

// e por fim o código "console.log("Você recebe",t,"/",p,"por hora")" irá imprimir no console "Você recebe",t,"/",p,"por hora" substituindo o nome das váriaveis por seus respectivos valores (valores dados pelo usuario nos prompts) //

// nomes melhores paras variaveis ------> //

let horasPorDia = prompt("Quantas horas você trabalha por dia?")
let salarioPorDia = prompt("Quanto você recebe por dia?")


// atividade 4 //

let nome
let idade

console.log(typeof(nome), typeof(idade))

// ^ os tipos das variáveis impressos no console são ambos 'undefined', isso ocorreu por que nenhum valor foi atribuido ou armazenado nessas variavéis, portanto, o tipo delas é indefinido //

nome = prompt("Qual é seu nome?")
idade = prompt("Qual é sua idade")

console.log(typeof(nome), typeof(idade))

// ^ os tipos das variáveis impressos no console são ambos string, isso ocorreu por que mesmo que o usuário insira um número no prompt o valor será armazenado como texto (string) na variável //

console.log("Olá", nome, "você tem", idade, "anos") // console.log imprimindo as informações do usuário //


// atividade 5 //

let agasalho = prompt("Você está usando casaco?")
let camisetaVerde = prompt("Você está usando uma camiseta verde hoje?")
let dentesEscovados = prompt("Você escovou os dentes hoje?")

let respostaAgasalho = agasalho.toUpperCase()
let respostaCamisetaVerde = camisetaVerde.toUpperCase()
let respostaDentesEscovados = dentesEscovados.toUpperCase()

console.log(`Você está usando casaco? ${respostaAgasalho}`)
console.log(`Você está usando uma camiseta verde hoje? ${respostaCamisetaVerde}`)
console.log(`Você escovou os dentes hoje? ${respostaDentesEscovados}`)


// atividade 6 //

let a = 10
let b = 25

c = b
b = a
a = c


console.log("O novo valor de a é", a) // o novo valor de a deverá ser 25 //
console.log("O novo valor de b é", b) // o novo valor de b deverá ser 10 //


// -- DESAFIO OPCIONAL -- //

let primeiroNumero = Number(prompt("Digite um número:"))
let segundoNumero = Number(prompt("Digite outro número:"))

let somaDosNumeros = primeiroNumero + segundoNumero
let multiplicaçãoDosNumeros = primeiroNumero . segundoNumero

console.log("A soma do primeiro número com o segundo número resulta em", somaDosNumeros)
console.l9g("A multiuplicação do primeiro número com o segundo número resulta em", multiplicaçãoDosNumeros)

