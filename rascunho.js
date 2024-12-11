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
document.getElementById("nome do id").textContent = "alterando Titulo"
document.getElementById("nome do id").textContent = "alterando Parágrafo"
document.getElementById("nome do id").textContent = "nome para link"


//usando um input para receber um valor, printar na tela como lista e se o valor for espaços aparecer um alerta, em seguida limppar o rascunho do input
function adicionarTarefa() {
    //variavel mensagem recebe "tarefa..."
    let mensagem = "Tarefa adicionada com sucesso!";
    //variavel inputTarefa recebe id inputTarefa (o input do html)
    let inputTarefa = document.getElementById("inputTarefa");
    //variavel tarefa recebe o valor da variavel inputTarefa e remove os espaço inicial e final.
    let tarefa = inputTarefa.value.trim();
    //se tarefa for diferente do string vazio
    if (tarefa !== "") {
        //id mensagem recebe um texto da variável mensagem
        document.getElementById("mensagem").textContent = mensagem;
        //variavel listaTarefas recebe id listaTarefas (a lista não ordenada do html)
        let listaTarefas = document.getElementById("listaTarefas");
        //variavel novaTarefa cria uma li no html 
        let novaTarefa = document.createElement("li");

        //variavel novaTarefa recebe variavel tarefa
        novaTarefa.textContent = tarefa;

        //variavel listaTarefas acrescenta um elemento filho na (novaTarefa)
        listaTarefas.appendChild(novaTarefa);

        //mostrar no console (tarefa)
        console.log(tarefa);
        //inputTarefa recebe um espaço vazio como valor
        inputTarefa.value = "";
    }
    //se não 
    else {
        //id mensagem irá adicionar um text (Por favor...)
        document.getElementById("mensagem").textContent = "Por favor, insira uma tarefa válida!";
    }
}


//alert, confirm and prompt.
    window.alert("Isso é um alerta!")
    window.confirm("Ok ou cancel")
    window.prompt("Escreva algo")


//usando o valor do prompt em um alerta.
    let nome = window.prompt("Código do colaborador")
    window.alert("Seja bem vindo, " + nome + "!")


//Conversão de Number() e String().
    var n1 = Number(window.prompt("Digite um número: "))
    var n2 = Number(window.prompt("Digite outro número: "))
    var idade = String(window.prompt("Qual é a sua idade: "))
    var soma = n1 + n2
    //usando ${} em string para facilitar o uso de variáveis.
    window.alert(`A soma de ${n1} e ${n2} fica no valor de ${soma}!`)


//coletando o nome e ilustrando em outras linhas a string em quantidades de letras, tudo maiúsculo e tudo minúsculo. 
    var nome = window.prompt("Qual é o seu nome?")
    document.write(`Olá, ${nome}! Seu nome tem ${nome.length} letras. <br>`)
    document.write(`Seu nome com todas as letras maiúsculas é ${nome.toUpperCase()}. <br>`)
    document.write(`Seu nome com todas as letras menúsculas é ${nome.toLowerCase()}. <br>`)