function verificar()//funçao chamada verificar()

{   //variavel data recebe nova data
    let data = new Date()
    //variavel ano recebe data do sistema 
    let ano = data.getFullYear()
    //variavel fano recebe input da data de nascimento
    let fano = document.getElementById('txtano')
    //variavel res recebe paragrafo com id res
    let res = document.querySelector('p#res')
    //variavel fsex recebe radio de suxualidade
    let fsex = document.getElementsByName('radsex')
    //variavel idade recebe ano - valor do input de nascimento
    let idade = ano - Number(fano.value)
    //variavel genero recebe string
    let genero = ''
    //variavel recebe elemento com id img
    let img = document.getElementById('img')

    //se a data de nascimento tiver 0 caracteris OU data de nascimento for menor que o ano atual
    if(fano.value.length == 0 || Number(fano.value) > ano){
        //abrir um alerta com uma msg
        window.alert("Verifique os dados e tente novamente!")
    }
    //se não
    else{
        //se radio sexualidade tiver marcado homem
        if (fsex[0].checked) {
            //variavel genero recebe "Homem"
            genero = "Homem"
            //ifs sobre idade
            if(idade >= 0 && idade < 2){
                img.src = 'fotos/bebeH.png'
            }else if( idade < 14){
                img.src = 'fotos/criancaH.jpg'
            }else if( idade < 22){
                img.src = 'fotos/JovemH.jpg'
            }else if( idade < 50){
                img.src = 'fotos/adultoH.jpg'
            }else if( idade < 100){
                img.src = 'fotos/idosoH.jpg'
            }

        //se não se radio sexualidade tiver marcado mulher
        }else if (fsex[1].checked){
            //variavel genero recebe "Mulher"
            genero = "Mulher"
            //ids sobre idade
            if(idade >= 0 && idade < 2){
                img.src = 'fotos/bebeM.jpg'
            }else if( idade < 14){
                img.src = 'fotos/criancaM.jpg'
            }else if( idade < 22){
                img.src = 'fotos/JovemM.jpg'
            }else if( idade < 50){
                img.src = 'fotos/adultoM.jpg'
            }else if( idade < 100){
                img.src = 'fotos/idosaM.jpg'
            }

        }
        //res recebe um nvo documento html...
        res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
        //variavel da data de nascimento recebe um valor vazio
        fano.value = ""
        //res acrescenta as imgs
        res.appendChild(img)
        
    }
    //debugar idade
    console.log(idade);
    //debugar genero
    console.log(genero);
}