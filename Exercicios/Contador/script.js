function contar(){
    let n1 = document.querySelector('input#n1')
    let n2 = document.querySelector('input#n2')
    let passos = document.querySelector('input#passos')
    const msg = document.querySelector('p#msg')
    let texto = ""
    
    if(n1.value <= 0){
        window.alert("Coloque um número maior que 0")
    }else if(n2.value <= n1.value){
        msg.textContent = "[ERRO] O valor FINAL não pode ser menor que o INICIAL"
    }else if(passos.value <= 0){
        msg.textContent = "[ERRO] Valor dos Passos não pode ser menor que 1"
    }else{
        for(n1 = Number(n1.value); n1 <= Number(n2.value); n1 += Number(passos.value)){
            console.log(n1);
            texto += `${n1} 👉`
        }
        msg.textContent = texto
    }

    

}