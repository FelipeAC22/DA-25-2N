let ouroTotal = 75000
let membrosTripulacao = 9
let recompensasBaseLuffy = 3000000000
let aumentoRecompensa = 150000000
let bonusExperiencia = 500
let forcaTripulacao = 95

let ouPorMembro = ouroTotal / membrosTripulacao
let restoOuro = ouroTotal % membrosTripulacao
let novaRecompensaLuffy = recompensasBaseLuffy + aumentoRecompensa
let poderLuffy = recompensasBaseLuffy * bonusExperiencia
let reducaoAumento = 50000000

aumentoRecompensa -= reducaoAumento

console.log("Ouro por membro:",ouPorMembro,"\nResto do ouro:",restoOuro,"\nNova recompensa do luffy:",novaRecompensaLuffy,"\nPoder do luffy:",poderLuffy,"\nRedução do aumento de recompensa:",reducaoAumento,"\nValor da recompensa depois da redução:",aumentoRecompensa)

let forcaInimigo = 120
let chanceVitoria = 0.7
let limiteSeguranca = 0.8
let temAkumaNoMi = true 
let inimigoTemHaki = true
let combateJusto = 'sim'
let combateRapido = 'sim'

let podeVencer = forcaTripulacao >= forcaInimigo
let riscoAlto = chanceVitoria < limiteSeguranca
let batalhaFacil = combateJusto == combateRapido

console.log("Podemos vencer?",podeVencer,"\nO risco é alto?",riscoAlto,"\nA batalha vai ser fácil?", batalhaFacil)