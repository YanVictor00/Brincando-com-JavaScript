function verificar()
{
    let data = new Date()
    let ano = data.getFullYear()
    let fano = document.getElementById('txtano')
    let res = document.querySelector('div#res')
    let fsex = document.getElementById('radsex')
    let idade = ano - Number(fano.value)
    let genero = ''
    
    if(fsex[0].checked) {
        genero = "Homem"
    }else if(fsex[1].checked){
        genero = "Mulher"
    }
    console.log(genero);
    
    if(fano.value.length == 0 || Number(fano.value) > ano){
        window.alert("Verifique os dados e tente novamente!")
    }else{
        res.innerHTML = `Idade caulculada: ${idade}`
        fano.value = ""
    }
    
}