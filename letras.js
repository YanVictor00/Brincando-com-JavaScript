//criando variável
let nome = "Yan"
nome = "Yan Victor"
document.getElementById("titulo").textContent = "Olá " + nome


//criando uma function
function mudarNome(){
    let nome = "Yan Victor"
    document.getElementById("msgsaudacao").textContent = "Olá, " + nome
}


//simulação de troca de text de h1,p,a...
document.getElementById("h1").textContent = "alterando Titulo"
document.getElementById("p").textContent = "alterando Parágrafo"
document.getElementById("a").textContent = "nome para link"
