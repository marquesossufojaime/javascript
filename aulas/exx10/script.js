function verificar() {
    var data = new Date()
    var ano =  data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.getElementById('res')
    if(fano.value.length == 0 || fano.value > ano){
        window.alert('[ERRO] verifique os dados e tente novamente!')
    }else{
        var fsex = document.getElementsByName('radsex')
        var idada = ano - Number(fano.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsex[0].checked){
            genero= 'Homenem'
        } else if(fsex[1].checked){
            genero = 'mulher'
        }
        res.style.textAlign = 'center'
        res.innerText = `dectamos ${genero} com ${idade} anos. `
    }
 
}
