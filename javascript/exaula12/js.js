var msg = window.document.getElementById('msg')
var img = window.document.getElementById('imagem')
var data = new Date()
var hora =  data.getHours()
msg.innerHTML = `agora são ${hora} horas.`
if (hora >= 0 && hora < 12 ) {
    // bom dia
    img.src = 'manhã.jpg'
    document.body.style.background = '#e5cd99'
}else if (hora >= 12 && hora <= 18) {
    // boa tarde
    img.src = 'tarde.jpg'
    document.body.style.background = '#f4ad91'
}else {
    // boa noite
    img.src = 'noite.jpg'
    document.body.style.background = '#434242'
}


