let personagens = [ // array de objetos para os personagens
    { nome: "Naruto Uzumaki", idade: 17, estilo: "Ninjutsu", jutsus: ["Kage Bunshin no Jutsu (Jutsu Clone das Sombras)", "Rasengan", "Fuuton: Rasenshuriken (Estilo Vento: Rasenshuriken)", "Modo Sábio (Senjutsu)", "Modo de Chakra da Nove Caudas"] },
    { nome: "Sasuke Uchiha", idade: 17, estilo: "Ninjutsu/Dōjutsu", jutsus: ["Chidori", "Katon: Goukakyuu no Jutsu (Estilo Fogo: Jutsu Bola de Fogo)", "Amaterasu (Chamas Negras)", "Susanoo", "Kirin", "Enton (Liberação de Chama)"] },
    { nome: "Kakashi Hatake", idade: 31, estilo: "Ninjutsu", jutsus: ["Chidori / Raikiri (Lâmina de Relâmpago)", "Doton: Doryuuheki (Estilo Terra: Parede de Lama)", "Suiton: Suijinheki (Estilo Água: Parede de Água)", "Kamui (Jutsu de Espaço-Tempo com o Mangekyō Sharingan)"] }
]

function adicionarPersonagem() { // funçao para adicionar mais personagens ao array
    console.clear()
    let perguntaNome = prompt("Qual o nome do personagem que deseja adicionar?")
    let perguntaIdade = Number(prompt("Qual a idade do personagem?"))
    let perguntaEstilo = prompt("Qual o estilo do personagem?")
    let perguntaJutsus = prompt("Quais os jutsus do personagem? Digite os nomes dos jutsus contendo somente espaços entre eles!")

    personagens.push({ nome: perguntaNome, idade: perguntaIdade, estilo: perguntaEstilo, jutsus: perguntaJutsus.split(' ') })
    alert("Personagem adicionado com sucesso!")
}

function buscarPersonagem() { // funçao para buscar um personagem pelo nome e retornar suas informaçoes
    console.clear()
    let buscarNome = prompt("Qual o nome do personagem que deseja procurar?")
    for (let i = 0; i < personagens.length; i++) {
        if ((personagens[i].nome.toUpperCase()).includes(buscarNome.toUpperCase()) === true) {
            let personagemParaExibir = [personagens[i]]
            return personagemParaExibir
        }
    }
    return "Personagem não encontrado!"
}

function listarPersonagens() { // funçao para listar todos os personagens do array
    console.clear()
    console.table(personagens)
}

function menu() { // funçao para o menu de escolhas
    let acao = 1
    while (acao !== 0) {
        acao = Number(prompt(`
    O que você deseja fazer?
    [0] Encerrar
    [1] Adicionar personagem
    [2] Buscar personagem 
    [3] Listar personagens`))
        switch (acao) {
            case 0:
                acao = 0
                alert("Encerrando...")
                break;
            case 1:
                adicionarPersonagem()
                break;
            case 2:
                console.table(buscarPersonagem())
                break;
            case 3:
                listarPersonagens()
                break;
            default:
                alert("Opção não encontrada!")
                break;
        }
    }
}

menu()