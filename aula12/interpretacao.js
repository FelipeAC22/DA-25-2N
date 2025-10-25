const respostaDoUsuario = prompt("Digite  o número que você quer testar") // declara a constante respostaDoUsuario que recebe o valor dado a um prompt
const numero = Number(respostaDoUsuario) // declara a constante numero que recebe o valor de um prompt convertido para number 

if (numero % 2 === 0) { // inicia uma condicional if onde se o resto da divisão da constante numero for igual a zero, a seguinte mensagem será impressa no terminal: "Passou no teste" 
    console.log("Passou no teste.")
} else { // se a condição não passar pelo if então será impressa no terminal a seguinte mensagem: "Não passou no teste"
    console.log("Não passou no teste.")
}

let fruta = prompt("Escolha uma fruta") // declara a variavel fruta que ira armazenar
let preco
switch (fruta) {
    case "Laranja":
        preco = 3.5
        break;
    case "Maçã":
        preco = 2.25
        break;
    case "Uva":
        preco = 0.30
        break;
    case "Pêra":
        preco = 5.5
        break;
    default:
        preco = 5
        break;
}
console.log("O preço da fruta ", fruta, " é ", "R$", preco)

// exibir a fruta escolhida
// 5
// O preço da fruta Pêra é R$ 5