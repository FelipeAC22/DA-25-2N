let campoDeBatalha = [
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
]



function criarNavios() {

    for (let i = 0; i < campoDeBatalha.length; i++) {
        for (let j = 0; j < campoDeBatalha[i].length; j++) {

            if ((j + 1) % 2 === 0) {
                let sorteio = Math.floor(Math.random() * 2)
                switch (sorteio) {
                    case 0:
                        campoDeBatalha[i][j] = 0
                        break;
                    case 1:
                        campoDeBatalha[i][j] = 1
                        break;
                }
            }
        }
    }
}

criarNavios()

atacar()
