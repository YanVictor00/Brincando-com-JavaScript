function carregar(){
    let msg = document.querySelector('div#msg')
    let img = document.querySelector('img#imagem')
    let date = new Date()
    let hora = date.getHours()
    //let hora = x
    msg.innerHTML = `Agora são ${hora} horas.`
    if (hora >= 5 && hora < 12) {
        //BOM DIA
        img.src = "fotos/manha.png"
        document.body.style.background = "#a57845"
    }else if (hora >= 12 && hora < 19){
        //BOA TARDE
        img.src = "fotos/tarde.png"
        document.body.style.background = "#808b96"
    }else{
        //Boa noite
        img.src = "fotos/noite.png"
        document.body.style.background = "#1d73ac"
    }
}