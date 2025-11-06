// ativ 1 //

function minhaFuncao(variavel) { // declara a função minhaFuncao
    return variavel * 5 // retorna o valor de variavel vezes 5
}
console.log(minhaFuncao(2)) // imprime o valor de 2 x 5: 10
console.log(minhaFuncao(10)) // imprime o valor de 10 x 10: 100

// ativ 2 //

let textoDoUsuario = prompt("Insira um texto") // pede um input pro usuario

const outraFuncao = function (texto) { // declara uma constante que armazena um função que recebe texto como parametro 
    return texto.toLowerCase().includes("cenoura") // retorna um boolean resultante da verificação "Na variavel texto convertida pra minusculas está incluida a palavra cenoura?"
}

const resposta = outraFuncao(textoDoUsuario) // declara a constante resposta que armazena o valor retornado pela função outraFuncao
console.log(resposta) // imprime no console o valor de resposta