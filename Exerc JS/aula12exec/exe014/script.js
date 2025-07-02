function carregar(){

var msg = window.document.getElementById('msg')
var foto = window.document.getElementById('foto')
var data = new Date()
//var hora = data.getHours()//
var hora = 22
msg.innerHTML = `Agora sao ${hora} horas.`



if (hora >= 0 && hora < 12) {
    //Bom Dia!!
    img.src = 'fotomanha.png'
}else  if (hora >= 13 && hora < 18) {
    //Boa tarde
    img.src = 'fototarde.png'
}else { 
    //Boa noite
    img.src = 'fotonoite.png'
}
}
