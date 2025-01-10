function verificar()
{
    let data = new Date()
    let ano = data.getFullYear()
    let fano = document.getElementById('txtano')
    let res = document.querySelector('p#res')
    let fsex = document.getElementsByName('radsex')
    let idade = ano - Number(fano.value)
    let genero = ''
    let img = document.getElementById('img')
    if(fano.value.length == 0 || Number(fano.value) > ano){
        window.alert("Verifique os dados e tente novamente!")
    }else{
        if (fsex[0].checked) {
            genero = "Homem"
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


        }else if (fsex[1].checked){
            genero = "Mulher"
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
        res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
        fano.value = ""
        res.appendChild(img)
        
    }
    console.log(idade);
    console.log(genero);
    
    
}