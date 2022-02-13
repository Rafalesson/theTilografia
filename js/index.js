function mostraNumPalavras(){
    let frases = $('.campo-digitacao').text()
    
    let numPalavras = frases.split(' ').length-1
    
    let tamanhoFrase = $('#caracter')

    return tamanhoFrase.text(numPalavras)
}
mostraNumPalavras()

function eventoClick (){
    let campo = $('.campo-digitacao')
    let botao = $('.botao')
    campo.on('input', function(){
        
    let conteudo = campo.val()
        
    let qtdPalavras = conteudo.split(/\S+/).length-1
    $('#palavras').text(qtdPalavras)

    let qtdCaracter = conteudo.length
    $('#caracter').text(qtdCaracter)

    })
}

eventoClick()
    