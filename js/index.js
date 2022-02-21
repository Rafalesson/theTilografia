let campo = $('.campo-digitacao')
let tempoInicial = $('.segundos').text()

function mostraNumPalavras() {
    let frases = $('.texto-box1').text()

    let numPalavras = frases.split(/\S+/).length - 1

    let tamanhoFrase = $('#qtdPalavras')

    return tamanhoFrase.text(numPalavras)
}

mostraNumPalavras()


function campoDigitacao() {
    campo.on('input', function () {

        let conteudo = campo.val()

        let qtdPalavras = conteudo.split(/\S+/).length - 1
        $('#palavras').text(qtdPalavras)

        let qtdCaracter = conteudo.length
        $('#caracter').text(qtdCaracter)

    })
}
campoDigitacao()

function botaoRemover(){
    $('.bt-remover').click(function(event){
        event.preventDefault()
        $(this).parent().parent().parent().remove()
        
    })
}
botaoRemover()

function inserePlacar() {
    let corpoTabela = $('.placar').find('tbody')
    let usuario = 'Rafa Alesson'
    let numPalavras = $('#palavras').text()
   
    let linha = novaLinha(usuario, numPalavras)
    linha.find('.bt-remover').click(botaoRemover)
    corpoTabela.append(linha)

}

function novaLinha(usuario, palavras){
    let linha = $('<tr>')
    let colunaUsuario = $('<td>').text(usuario)
    let colunaPalavras = $('<td>').text(palavras)
    let colunaRemover = $('<td>')
    let link = $('<a>').attr('href', '#restart')
    let icone = $('<img>').attr('src', '../img/lixo.png').addClass('bt-remover')

    link.append(icone)
    colunaRemover.append(link)
    linha.append(colunaUsuario)
    linha.append(colunaPalavras)
    linha.append(colunaRemover)

    return linha
}

function senhorDoTempo() {
    campo = $('.campo-digitacao')
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
                $('.segundos').text(`Game Over`)

                $('.campo-digitacao').css({
                    background: 'white',
                    fontWeight: 'bold'
                })

                $('.segundos').css({
                    background: 'rgba(245, 250, 254)',
                    color: 'red'
                })

                campo.removeClass('borda-vermelha')
                campo.removeClass('borda-verde')
                inserePlacar()
            }

        }, 1000)
    })
}
senhorDoTempo()

function botaoRestart() {
    $('#restart').click(function () {
        campo.attr('disabled', false)
        campo.val('')
        campo.css({
            background: 'rgba(255, 255, 255, .1)'
        })
        $('#palavras').text('0')
        $('.segundos').text(tempoInicial)
        $('.segundos').css({
            color: 'black'
        })
        senhorDoTempo()
    })
}
botaoRestart()

function verificaTexto() {
    let texto = $('.texto-box1').text()
    campo = $('.campo-digitacao')

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

