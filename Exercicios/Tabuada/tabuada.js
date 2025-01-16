function tabuada(){
    let num = document.querySelector('input#num')
    let tab = document.querySelector('select#selTab')
    if(num.value.length == 0){
        window.alert("[ERRO] Digite um número.")
    }else{
        let n = Number(num.value)
        let c = 1
        while ( c <= 10){
            let item = document.createElement('option')
            item.text = `${n} x ${c} = ${n*c}`
            item.value = `tab${c}`
            tab.appendChild(item)
            c++
        }
    }
}
function limpar(){
    let num = document.querySelector('input#num')
    let tab = document.querySelector('select#selTab')
    num.value = ""
    tab.innerHTML = ""
}