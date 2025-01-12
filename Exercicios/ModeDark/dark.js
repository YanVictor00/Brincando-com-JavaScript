function multa(){
    let txtvel = document.getElementById("txtvel")
    let txtvelv = txtvel.value
    let msg = document.querySelector('p#msg')
    //console.log(`Sua velocidade atual é de <strong>${txtvelv}</strong>Km/h`)
    let img = document.querySelector('img#img')
    
    if(txtvelv > 60){
        msg.innerText = "VOCÊ ULTRAPASSOU A VELOCIDADE MAXIMA. MULTADO!"
    }else{
        msg.innerText = "DIRIJA COM CUIDADO!"
    }
    }
    
    function alterar(){
        let form = document.getElementsByName('cori')
        let a = document.querySelector('p#a')
        if(form[0].checked) {
            document.body.style.background = "black"
            document.body.style.color = "white"
            img.src = 'surprise.png'
            img.style.width = "800px"
            a.appendChild(img)
        }else if(form[1].checked) {
            document.body.style.background = "white"
            document.body.style.color = "black"
            img.src = ''
        }

    }