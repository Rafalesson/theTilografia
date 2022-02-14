function mostraNumPalavras() {
    let frases = $('.campo-digitacao').text()

    let numPalavras = frases.split(/\S+/).length - 1

    let tamanhoFrase = $('#caracter')

    return tamanhoFrase.text(numPalavras)
}


function campoDigitacao() {
    let campo = $('.campo-digitacao')
    campo.on('input', function () {

        let conteudo = campo.val()

        let qtdPalavras = conteudo.split(/\S+/).length - 1
        $('#palavras').text(qtdPalavras)

        let qtdCaracter = conteudo.length
        $('#caracter').text(qtdCaracter)

    })
}

campoDigitacao()

function senhorDoTempo() {
    let campo = $('.campo-digitacao')
    let tempoRestante = $('.segundos').text()

    campo.one('focus', function () {
        let cronometro = setInterval(function () {
            tempoRestante--
            $('.segundos').text(tempoRestante)

            if (tempoRestante == 3){

            }

            if(tempoRestante == 5){
                $('.segundos').css({
                    background: 'red',
                    color: 'white'
                })
            }
            
            if (tempoRestante == 0) {
                campo.attr('disabled', true)
                clearInterval(cronometro)
                $('.segundos').text(`REINICIAR`)
                $('.campo-digitacao').css({
                    background: 'white',
                    fontWeight: 'bold'
                })
            }
            
        }, 1000)
    })
}

senhorDoTempo()






