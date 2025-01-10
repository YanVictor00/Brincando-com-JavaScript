function verificar()
{
    let data = new Date()
    let ano = data.getFullYear()
    let fano = document.getElementById('txtano')
    let res = document.querySelector('p#res')
    let fsex = document.getElementsByName('radsex')
    let idade = ano - Number(fano.value)
    let genero = ''
    
    if(fano.value == 0 || Number(fano.value) > ano){
        window.alert("Verifique os dados e tente novamente!")
    }else{
        if (fsex[0].checked) {
        genero = "Homem"
        }else if (fsex[1].checked){
        genero = "Mulher"
        }
        res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
        fano.value = ""
    }
    
}