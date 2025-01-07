//função chamda "carregar"
function carregar(){
    //variaveis
    let msg = document.querySelector('div#msg')
    let img = document.querySelector('img#imagem')
    let date = new Date()
    let hora = date.getHours()
    //inserindo um texto na variavel msg
    msg.innerHTML = `Agora são ${hora} horas.`
    //if a variavel hora for maior ou igual a 5 e menor que 12...
    if (hora >= 5 && hora < 12) {
        //mudar imagem e cor do fundo
        img.src = "fotos/manha.png"
        document.body.style.background = "#a57845"
    }
    //if a variavel hora for maior ou igual a 12 e menor que 19...
    else if (hora >= 12 && hora < 19){
        //mudar imagem e cor do fundo
        img.src = "fotos/tarde.png"
        document.body.style.background = "#808b96"
    }
    //se não, pela lógica ela será entre 19/4.
    else{
        //mudar imagem e cor do fundo
        img.src = "fotos/noite.png"
        document.body.style.background = "#1d73ac"
    }
}