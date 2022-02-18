function mostraNumPalavras() {
    let frases = $('.texto-box1').text()

    let numPalavras = frases.split(/\S+/).length - 1

    let tamanhoFrase = $('#qtdPalavras')

    return tamanhoFrase.text(numPalavras)
}

mostraNumPalavras()


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

            if (tempoRestante == 5) {
                $('.segundos').css({
                    background: 'red',
                    color: 'white'
                })
            }

            if (tempoRestante == 0) {
                clearInterval(cronometro)
                campo.attr('disabled', true)
                $('.segundos').text(`REINICIAR`)

                $('.campo-digitacao').css({
                    background: 'white',
                    fontWeight: 'bold'
                })
                campo.removeClass('borda-vermelha')
                campo.removeClass('borda-verde')
                inserePlacar()
            }

        }, 1000)
    })
}
senhorDoTempo()





function verificaTexto() {
    let texto = $('.texto-box1').text()
    let campo = $('.campo-digitacao')

    campo.on('input', function () {
        let digitado = campo.val()
        let comparavel = texto.substr(0, digitado.length)

        if (digitado == comparavel) {
            campo.addClass('borda-verde')
            campo.removeClass('borda-vermelha')
        }
        else {
            campo.addClass('borda-vermelha')
            campo.removeClass('borda-verde')
        }
    })
}

verificaTexto()

function inserePlacar() {
    let corpoTabela = $('.placar').find('tbody')
    let usuario = 'Rafa Alesson'
    let numPalavras = $('#palavras').text()

    let linha = `<tr>
        <td> ${usuario} </td>
        <td> ${numPalavras} </td>
    </tr>`

    corpoTabela.append(linha)
}