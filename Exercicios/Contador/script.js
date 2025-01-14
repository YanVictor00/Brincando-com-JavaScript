function contar(){
    let n1 = document.querySelector('input#n1')
    let n2 = document.querySelector('input#n2')
    let passos = document.querySelector('input#passos')
    let msg = document.querySelector('p#msg')

    for(n1 = Number(n1.value); n1 = Number(n2.value); n1 += Number(passos.value)){
        console.log(n1);
        msg.innerHTML = n1

    }

}