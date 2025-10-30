let vidaJogador = 1
let recursosJogador = 0
let rodadas = 0

while (vidaJogador > 0 && recursosJogador < 10) { // loop do menu principal


    let ação = Number(prompt(`ESCOLHA SUA AÇÃO:\n[1] explorar\n[2] descansar`)) // menu principal

    let resultado = Math.floor(Math.random() * 101) // numero pseudo aleatorio para as chances

    switch (ação) { // resultado da ação
        case 1: // caso escolha explorar
            if (resultado < 25) {
                prompt("Você encontrou um perigo, o jogo continua!\nTecle ENTER para voltar para o menu")
            } else if (resultado < 50) {
                prompt("Você encontrou um gamemaker e perdeu 1 ponto de vida!\nTecle ENTER para voltar para o menu")
                vidaJogador--
            } else if (resultado >= 50) {
                prompt("Você encontrou um recurso!\nTecle ENTER para voltar para o menu")
                recursosJogador++
            }
            rodadas++
            break;
        case 2: // caso escolha descansar
            prompt("Você escolheu descansar e ganhou 1 ponto de vida!\nTecle ENTER para voltar para o menu")
            vidaJogador++
            rodadas++
            break;
        default: // deafult para erro de digitaçao
            prompt("Digite uma ação valida!\nTecle ENTER para voltar para o menu")
            break;
    }
}

prompt(`VOCÊ MORREU!\ntotal de rodadas: ${rodadas}\ntotal de vida: ${vidaJogador}\ntotal de recursos: ${recursosJogador}`)