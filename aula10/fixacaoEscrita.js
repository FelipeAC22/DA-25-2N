// 3 

let nomeUsuario = prompt("Digite seu nome:")
let emailUsuario = prompt("Digite seu email:")

console.log(`O e-mail ${emailUsuario} foi cadastrado com sucesso. Seja bem-vindo(a), ${nomeUsuario}`)


// 4

let comidasFavoritas = ["Pizza", "Strogonoff", "Lasanha", "Panquecas", "Pudim"]

console.log(comidasFavoritas)
console.log(`Essas são as minhas comidas favoritas:\n${comidasFavoritas[0]}\n${comidasFavoritas[1]}\n${comidasFavoritas[2]}\n${comidasFavoritas[3]}\n${comidasFavoritas[4]}`)

let comidaFavoritaUsuario = prompt("Diga a sua comida favorita:")
comidasFavoritas.splice(1, 1, comidaFavoritaUsuario)
console.log(comidasFavoritas)


// 5

let listaDeTarefas = []

let tarefa1 = prompt("Diga uma tarefa que você precise realizar no dia:")
let tarefa2 = prompt("Diga mais uma tarefa que você precise realizar no dia:")
let tarefa3 = prompt("Diga uma última tarefa que você precise realizar no dia:")

listaDeTarefas.push(tarefa1)
listaDeTarefas.push(tarefa2)
listaDeTarefas.push(tarefa3)

console.log(listaDeTarefas)

let tarefasRealizadas = prompt("Diga o índice da tarefa que você já realizou (0, 1, 2):")

listaDeTarefas.splice(tarefasRealizadas, 1)
console.log(listaDeTarefas)
