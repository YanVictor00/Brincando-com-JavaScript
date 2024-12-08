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