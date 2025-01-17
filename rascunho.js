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


//converto o valor da variável para BRL e trocando a ',' da variável por '.'
    var dinheiro = 1890.5
    dinheiro.toFixed(2).toLocaleString('pr-BR', {style: 'currency', currency: 'BRL'})
    dinheiro.toFixed(2).replace(".", ",")


//Usando o DOM (Document Object Model)
 //por TAG
 let p1 = window.document.getElementsByTagName('p')[0]
 let corpo = window.document.body
 window.document.write('Está escrito : ' + p1.innerText)
 p1.style.color = 'red'
 corpo.style.background = 'rgb(50,50,50)'

 //mostrando o titulo do site
 window.document.write(window.document.title)

 //por ID
 let msg = document.getElementById('msg')
 msg.style.background = 'white'
 msg.innerText = 'Mudei a mensagem'

 //por Classes
 let msg = window.document.getElementsByClassName('msg')[0]
 msg.innerText = 'aoba'

//por Seletor
let a = document.querySelector('div.msg')
a.style.color = 'red'

//condição simples
let vel = 12
if(vel > 40){
    console.log("Você ultrapassou da velocidade recomendada. Multado!")
}
console.log("Dirija com cuidado!")

//Condição composta
let pais = "EUA"
console.log(`Vivendo em ${pais}`)
if(pais == 'Brasil'){
    console.log("É BRASILEIRO!")
}else{
    console.log('É ESTRANGEIRO!') 
}


//SISTEMA DE MULTAS
function multa(){
    let txtvel = document.getElementById("txtvel")
    let txtvelv = txtvel.value
    let msg = document.querySelector('p#msg')
    //console.log(`Sua velocidade atual é de <strong>${txtvelv}</strong>Km/h`)
    if(txtvelv > 60){
        msg.innerText = "VOCÊ ULTRAPASSOU A VELOCIDADE MAXIMA. MULTADO!"
    }else{
        msg.innerText = "DIRIJA COM CUIDADO!"
    }
    }



//condição aninhada
let idade = 70
console.log(`Você tem ${idade} anos.`);

if(idade < 16){
    console.log("NÃO VOTA!");
}else if(idade < 18 || idade > 65){
    console.log("VOTO OPCIONAL.");
}else{
    console.log("VOTO OBRIGATÓRIO!");

}


//condição múltiplas 
let agora = new Date()
let diadaSem = agora.getDay()
switch(diadaSem){
    case 0:
        console.log("É DOMINGO")
    break
    case 1:
        console.log("É SEGUNDA")
    break
    case 2:
        console.log("É TERÇA")
    break
    case 3:
        console.log("É QUARTA")
    break
    case 4:
        console.log("É QUINTA")
    break
    case 5:
        console.log("É SEXTA")
    break
    case 6:
        console.log("É SÁBADO")
    break
    default:
        console.log("[ERRO] Dia inválido.");       
}


//REPETIÇOES
let _ = 1
while( _ <= 0 ){
    console.log(`repeti isso ${_}`);
    _++
    
}
//or
let c = 1
do{
    console.log(`repeti isso ${c}`);
    c++
}while(c <= 0)
//or
for(let a = 1; a <= 10; a++){
    console.log(a);
    
}

// Parâmetros
// Argumentação
// Retorno                  
function pedidoPizza(tipoDaBorda, tipoDoSabor){
    const pizza = `Descrição do Pedido. Borda: ${tipoDaBorda}. Sabor: ${tipoDoSabor}`
    return pizza
}
let pedido1 = pedidoPizza('Chocolate', 'Portuguesa')
console.log(pedido1);


// Variável composto || Array
let v = [5, 8, 2, 9, 3]
//v.push() // adiciona o valor no elemento final
//v.length //conta os elementos
//v.sort() // coloca em ordem crescente
console.log(`Nosso vetor é o ${v}`)
console.log(`Tem ${v.length} elementos`)
v.sort()
console.log(`Nosso vetor em ordem crescente fica ${v}`)


// array com repetição
let yan = [8, 1, 4, 5]
yan.sort()
/*
for(let pos = 0; pos < yan.length; pos++){
    console.log(`O elemento ${pos} tem o valor ${yan[pos]}`)
}
*/      //or
for(let pos in yan){
    console.log(`O elemento ${pos} tem o valor ${yan[pos]}`)
}
let src = yan.indexOf(1) // procura o valor em um dos elementos
if(src == -1){
    console.log("Não foi encontrado nenhum valor em um dos elementos. :/");
    
}else{
    console.log(`O valor está no elemento ${src}`);
}


