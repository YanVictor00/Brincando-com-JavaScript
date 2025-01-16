function contar(){
    let na = document.querySelector('input#n1')
    let nb = document.querySelector('input#n2')
    let n1 = Number(na.value)
    let n2 = Number(nb.value)
    let passos = document.querySelector('input#passos')
    const msg = document.querySelector('p#msg')
    let texto = ""
    
    if(n1.value < 0){
        window.alert("Coloque um número maior que 0")
    }else if (Number(passos.value) > n1 && Number(passos.value) > n2 || Number(passos.value) <= 0) {
        msg.textContent = "[ERRO] o 'PASSOS' não poder ser maior ou menor que os números iniciais e finais"
    }
    else{
        if(n1 < n2){
            for(n1; n1 <= n2; n1 += Number(passos.value)){
                console.log(n1);
                texto += `${n1} 👉`
            }
        }else{
            for(n1; n1 >= n2; n1 -= Number(passos.value)){
                console.log(n1);
                texto += `${n1} 👉`
            }
        }
        msg.innerHTML =  texto + `🏁`
    }
}