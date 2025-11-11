
let filme = {
    nome: "Shrek terceiro",
    direção: "Chris Miller",
    anoDeLançamento: 2007,
    elenco: ["Mike Myers", "Eddie Murphy", "Cameron Diaz", "Antonio Banderas", "Justin Timberlake", "Rupert Everett", "Julie Andrews", "Eric Idle", "Amy Poehler", "Amy Sedaris", "Maya Rudolph", "Cheri Oteri", "John Cleese", "Ian McShane", "Larry King", "Conrad Vernon", "Cody Cameron", "Aron Warner", "Susanne Blakeslee", "Regis Philbin", "Christopher Knights"],
    assistiu: "Sim"
}

/*
console.log(filme.nome)
console.log(filme.direção)
console.log(filme.anoDeLançamento)
console.log(filme["elenco"])
console.log(filme["assistiu"])
*/

filme.personagens = ["Shrek", "Burro", "Princesa Fiona", "Gato de Botas", "Rei Arthur 'Artie'", "Príncipe Encantado", "Rainha Lillian", "Merlin", "Branca de Neve", "Cinderela", "Rapunzel", "Bela Adormecida", "Rei Harold", "Capitão Gancho", "Doris", "Biscoito/Rumpelstiltskin", "Pinóquio/Os Três Porquinhos", "Lobo Mau", "Malévola", "Mabel", "Os Três Ratos Cegos"]
console.log("Atores e seus personagens:")
for (let i = 0; i < filme.elenco.length - 1; i++) {
    console.log(`${filme.elenco[i]}(${filme.personagens[i]}) `)

}

filme.elenco[0] = "Xuxa"
console.log(filme)

/*
let pessoa = {
    nome: "Felipe Shalon",
    idade: 26,
    gêneroMusical: "Sertanejo"
}

console.log(`O nome da pessoa é ${pessoa.nome}, ele tem ${pessoa.idade} anos e gosta muito de ${pessoa.gêneroMusical}`)
*/