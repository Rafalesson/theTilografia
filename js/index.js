function mostraNumPalavras(){
    let frases = $('.campo-digitacao').text()
    
    let numPalavras = frases.split(" ").length
    
    let tamanhoFrase = $('#caracter')

    return tamanhoFrase.text(numPalavras)
}
mostraNumPalavras()

function eventoClick (){
    let campo = $('.campo-digitacao')
    let botao = $('.botao')
    botao.on('click', function(){
        
    let conteudo = campo.val()
        
    let qtdPalavras = conteudo.split(' ').length
    $('#palavras').text(qtdPalavras)

    let qtdCaracter = conteudo.length
    $('#caracter').text(qtdCaracter)

    })
}

eventoClick()
    