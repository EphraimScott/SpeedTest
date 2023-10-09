function andarPraFrente(){

}

function andarPraDireita(){

}

function andarPraEsquerda(){

}

function andarPraTras(){

}

function correr(){

}

function morder(){

    let f = document.querySelector("#forca").value
    let m = document.querySelector("p")
    
    if(f==1){
        m.innerHTML = "o inimigo perdeu energia!"
    }else if (f==2){
        m.innerHTML = "o inimigo ficou sem os pés!"
    }else if (f==3){
        m.innerHTML = "o inimigo perdeu as pernas!"
    }else if (f==4){
        m.innerHTML = "o inimigo perdeu os braços!"
    }else if (f==5){
        m.innerHTML = "o inimigo perdeu o pescoço!"
    }

}