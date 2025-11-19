let personagens = [ // array de personagens contendo nome, classe, nivel, hp e skills
    {
        nome: "Aragorn",
        classe: "Herói",
        nivel: 15,
        HP: 120,
        habilidades: [
            "Rastreamento Experiente",
            "Liderança Inspiradora",
            "Conhecimento Élfico e de Ervas",
            "Ataque Preciso"
        ],
        historicoAcoes: []
    },
    {
        nome: "Gandalf",
        classe: "Mago (Istari)",
        nivel: 20,
        HP: 80,
        habilidades: [
            "Poderes Maia",
            "Sabedoria Arcana",
            "Rajada Elemental",
            "Consultar Mente / Previsão"
        ],
        historicoAcoes: []
    },
    {
        nome: "Frodo",
        classe: "Portador do Anel/Hobbit",
        nivel: 4,
        HP: 30,
        habilidades: [
            "Resistência ao Medo",
            "Discrição Hobbit",
            "Furtividade",
            "Visão do Mundo Invisível"
        ],
        historicoAcoes: []
    },
    {
        nome: "Gimli",
        classe: "Guerreiro/Berserker Anão",
        nivel: 10,
        HP: 140,
        habilidades: [
            "Resistência Anã",
            "Machado de Batalha",
            "Determinação Inabalável",
            "Visão no Escuro"
        ],
        historicoAcoes: []
    },
    {
        nome: "Legolas",
        classe: "Arqueiro Élfico/Batedor",
        nivel: 12,
        HP: 90,
        habilidades: [
            "Tiro Preciso",
            "Agilidade Élfica",
            "Sentidos Aguçados",
            "Caminhar Oculto"
        ],
        historicoAcoes: []
    }
]

function adicionarPersonagem() { // função que cadastra novos personagens 
    let perguntaNome = prompt("Qual o nome do personagem que deseja adicionar?")
    let perguntaClasse = prompt("Qual a classe do personagem?")
    let perguntaNivel = Number(prompt("Qual o nível do personagem?"))
    let perguntaHP = Number(prompt("Qual é o total de pontos de vida do personagem?"))
    let perguntaHabilidades = prompt("Quais as habilidades do personagem? Digite os nomes das habilidades separados por espaço")

    personagens.push({ // esse bloco puxa todas infos de personagem para o array de personagens
        nome: perguntaNome,
        classe: perguntaClasse,
        nivel: perguntaNivel,
        HP: perguntaHP,
        habilidades: perguntaHabilidades.split(" "),
        historicoAcoes: []
    })
    alert("Personagem adicionado com sucesso!")
}

function buscarPersonagem() { // função que permite buscar personagens e retorna as infos
    let buscarNome = prompt("Qual o nome do personagem que deseja selecionar?")
    for (let i = 0; i < personagens.length; i++) {
        if (personagens[i].nome.toUpperCase().includes(buscarNome.toUpperCase())) {
            return personagens[i]
        }
    }
    return null
}

function agir() { // função que permite que seja possivel executar ações com cada personagem
    let personagemEscolhido = buscarPersonagem()
    if (!personagemEscolhido) {
        alert("Personagem não encontrado!")
        return
    }

    let acao = -1
    while (acao !== 0) { // menuzinho para escolher qual ação o personagem deve executar
        acao = Number(prompt(`
    O que o personagem deve fazer?
    [0] Nada
    [1] Atacar
    [2] Defender
    [3] Usar skills especiais`))

        switch (acao) {
            case 0:
                alert("Encerrando ações...")
                break
            case 1:
                atacar(personagemEscolhido)
                break
            case 2:
                defender(personagemEscolhido)
                break
            case 3:
                usarSkill(personagemEscolhido)
                break
            default:
                alert("Opção não encontrada!")
                break
        }
    }
}

// funções para cada ação:

function atacar(personagem) {
    alert(`O personagem ${personagem.nome} atacou!`)
    personagem.historicoAcoes.push("Atacou")
}

function defender(personagem) {
    alert(`O personagem ${personagem.nome} defendeu!`)
    personagem.historicoAcoes.push("Defendeu")
}

function usarSkill(personagem) { // função para verificar se a habilidade escolhida está no array de habilidades do personagem escolhido
    console.log(`habilidades para selecionar: ${personagem.habilidades}`)
    let skill = prompt("Qual habilidade deseja usar?")
    if (personagem.habilidades.includes(skill)) {
        alert(`O personagem ${personagem.nome} usou a habilidade ${skill}!`)
        personagem.historicoAcoes.push(`Usou habilidade: ${skill}`)
    } else {
        alert(`${personagem.nome} não possui a habilidade ${skill}`)
    }
}

// função para excluir um personagem usando seu nome como metodo de busca no array

function excluirPersonagem() {
    let nome = prompt("Digite o nome do personagem que deseja excluir:")
    for (let i = 0; i < personagens.length; i++) {
        if (personagens[i].nome.toUpperCase() === nome.toUpperCase()) {
            personagens.splice(i, 1)
            alert("Personagem excluído com sucesso!")
            return
        }
    }
    alert("Personagem não encontrado!")
}

// função para listar todos personagens em uma tabela no console

function listarPersonagens() {
    console.clear()
    console.table(personagens)
}

// imprime em alerts as informações de status de um personagem, usando o nome dele como metodo de busca

function verificarStatus() {
    let nome = prompt("Digite o nome do personagem para verificar status:")
    let personagem = personagens.find(p => p.nome.toUpperCase() === nome.toUpperCase())
    if (personagem) {
        alert(`Status de ${personagem.nome}:\nClasse: ${personagem.classe}\nNível: ${personagem.nivel}\nHP: ${personagem.HP}\nHabilidades: ${personagem.habilidades.join(", ")}\nHistórico: ${personagem.historicoAcoes.join(", ")}`)
    } else {
        alert("Personagem não encontrado!")
    }
}

// menu que inicia o programa, caso o prompt seja 0 o programa termina

function menu() {
    let opcao = -1
    while (opcao !== 0) {
        opcao = Number(prompt(`
    Escolha uma opção:
    [0] Sair
    [1] Adicionar personagem
    [2] Listar personagens
    [3] Agir com personagem
    [4] Excluir personagem
    [5] Verificar status
        `))

        switch (opcao) { // switch com os cases para o prompt de opts
            case 0:
                alert("Encerrando...")
                break
            case 1:
                adicionarPersonagem()
                break
            case 2:
                listarPersonagens()
                break
            case 3:
                agir()
                break
            case 4:
                excluirPersonagem()
                break
            case 5:
                verificarStatus()
                break
            default:
                alert("Opção inválida!")
                break
        }
    }
}

menu()

/* 

No código eu usei .join() para imprimir os arrays como uma string única e ainda conseguir adicionar uma virgula após cada elemento

POR EXEMPLO:

alert(`Status de ${personagem.nome}:\nClasse: ${personagem.classe}\nNível: ${personagem.nivel}\nHP: ${personagem.HP}\nHabilidades: ${personagem.habilidades.join(", ")}\nHistórico: ${personagem.historico.join(", ")}`)

nessa linha eu utilizo .join() pra imprimir em um alert, o array de habilidade do personagem e o array do histórico dos personagens, 
assim os transformando em uma 'frase' como uma string e pondo um virgula entre cada elemneto pra melhor separação

*/