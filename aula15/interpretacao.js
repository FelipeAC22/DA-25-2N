/*
let valor = 0 // declara variavel valor que recebe 0

for (let i = 0; i < 5; i++) {// declara um for que declara let i = 0, para a condição compara se i é menor que 5 e aumenta o valor de i em 1 toda vez que o bloco reinicia
    valor += i // declara a variavel valor que recebe o própio valor mais o valor de i toda vez que o bloco reinicia
}
console.log(valor) // imprime o valor de valor, que será 10

// i = 0, valor = 0
// i = 1, valor = 1
// i = 2, valor = 3
// i = 3, valor = 6
// i = 4, valor = 10


const lista = [10, 11, 12, 15, 18, 19, 21, 23, 25, 27, 30] // declara um array de numeros
for (let numero of lista) { // cria um for of que vai percorrer o array lista e armazenar a cada reinicio o valor a variavel numero
    if (numero > 18) { // cria um if onde se numero for maior que 18 o código ira rodar
        console.log(numero) // immprime na tela o valor de numero
    }
}

//a)
// 19, 21, 23, 25, 27, 30

//b)
// Sim, para acessar o indice de cada elemento o seguinte código poderia ser usado;
// console.log(lista.indexOf(numero))
*/

const quantidadeTotal = Number(prompt("Digite a qauntidade de linhas: ")) // declara a constante quantidadeTotal que armazena um prompt em number
let quantidadeAtual = 0 // declara a variavel quantidadeAtual que recebe 0
while (quantidadeAtual < quantidadeTotal) { // enquanto qauntidadeAtual for menor que quantidadeTotal o bloco do while irá rodar
    let linha = "" // declara a variavel linha que recebe uma string vazia
    for (let asteriscos = 0; asteriscos < quantidadeAtual + 1; asteriscos++) { // cria um for onde let asteriscos recebe 0, como condição de continuidade tem asteriscos < quantidadeTotal e aumenta o valor de asteriscos em 1 todas vez que o for reinicia
        linha += "*" // enquanto a condição de "for" ser verdade um * será adicionado aa variável linha
    }
    console.log(linha) // imprime o valor de linha
    quantidadeAtual++ // aumenta o valor de quantidadeAtual em 1 toda vez que o while reinicia
}

//a)
// caso o usuario digite 4 será impresso no console o seguinte:
// *
// **
// ***
// ****

