/*
let pessoa = {
    nome: "Felipe Antunes Cardoso",
    apelidos: ["Lipe", "Filipinho", "Fê"]
}
function imprimirOjeto(objeto) {
    console.log(`EU sou ${objeto.nome}, mas pode me chamar de: ${objeto.apelidos[0]}, ${objeto.apelidos[1]} ou ${objeto.apelidos[2]}`)
}

imprimirOjeto(pessoa)

let pessoa2 = {
    ...pessoa,
    apelidos: ["Phili", "Fefo", "Fips"]
}

imprimirOjeto(pessoa2)
*/

let pessoa1 = {
    nome: "Felipe",
    idade: 17,
    profissão: "Estudante"
}

let pessoa2 = {
    nome: "Carlito",
    idade: 41,
    profissão: "Desenvolvedor Fullstack"
}

function apresentar(pessoaInfo1, pessoaInfo2) {
    infoArray = [pessoaInfo1.nome, pessoaInfo1.idade, pessoaInfo1.profissão, pessoaInfo1.profissão.length, pessoaInfo2.nome, pessoaInfo2.idade, pessoaInfo2.profissão, pessoaInfo2.profissão.length]
    return infoArray.join()
}

console.log(apresentar(pessoa1, pessoa2))