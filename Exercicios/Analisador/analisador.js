let num = document.querySelector('input#inpNum')
let lista = document.querySelector('select#valores')
let res = document.querySelector('div#res')
let valores = []

function isNumero(n){
    if( Number(n) >= 1 && Number(n) <= 100){
        return true
    }else{
        return false
    }
}
function inLista(n, l){
    if(l.indexOf(Number(n)) != -1){
        return true
    }else{
        return false
    }
}

function adicionar(){
    if(isNumero(num.value) && !inLista(num.value, valores)){
        valores.push(Number(num.value))
        let msg = document.createElement('option')
        msg.text = `Número ${num.value} adicionado na lista.`
        lista.appendChild(msg)
         
    }else{
        window.alert('Valor inválido ou já encontrado na lista. ')
    }
    num.value = ""
    num.focus()
}

function clean(){
    valores = []
    lista.innerHTML = ``
    let msg = document.createElement('option')
    msg.text = `Adicione os valores aqui 👇`
    lista.appendChild(msg)
     res.innerHTML = ""
}

function finalizar(){
    let total = valores.length
    let maior = valores[0]
    let menor = valores[0]
    let soma = 0
    let media = 0
    if(total == 0){
        window.alert("Coloque valores na Array")
    }else{
        
        for(let pos in valores){
            soma += valores[pos]
            media = soma / total
            if(valores[pos] > maior){
                maior = valores[pos]
            }
            if (valores[pos] < menor) {
                menor = valores[pos]
            }
                
        }
        res.innerHTML = ""
        res.innerHTML += `<p>Ao todo, temos ${total} números cadastrados.</p>`
        res.innerHTML += `<p>Sendo: ${valores.sort((a, b) => a - b)} organizados em ordem crescente. </p>`
        res.innerHTML += `<p>O maior valor informado foi: ${maior}.</p>`
        res.innerHTML += `<p>O menor valor informado foi: ${menor}.</p>`
        res.innerHTML += `<p>A soma dos valores é: ${soma}.</p>`
        res.innerHTML += `<p>A media dos valores é: ${media}.</p>`
    }
        
}