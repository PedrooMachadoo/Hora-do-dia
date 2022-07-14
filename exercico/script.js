function carregar(){
    let msg = window.document.getElementById('msg');
    let img = window.document.getElementById('imagem');
    let data = new Date();
   let hora = data.getHours();
   //let hora = 18
    msg.innerHTML = `Agora são ${hora}h.`

    if (hora >= 0 && hora <= 12){
        //bom dia
        img.src = 'img/manha.png'
        document.body.style.background = '#e2cd9f'
    }else if (hora >= 13 && hora <= 17){
        //boa tarde
        img.src = 'img/tarde.png'
        document.body.style.background = '#b9846f'
    }else{
        //boa noite
        img.src = 'img/noite.png'
        document.body.style.background = '#515154'
    }
}