document.body.style.backgroundImage = 'url(../imagens/Background_Metro/Hollow.jpg)'

var listas = document.querySelectorAll('li[data-slide-to]').length
var x = 0

//Barra Lateral Inicial
$('.item-lateral').addClass('hollow-lateral')

//Função >> muda o estilo de acorda que passa de jogo
function FundoVai(){
    if(x >= listas - 1){
        x = 0
    } else {
        x++
    }

    switch(x){
        case 0:
            document.body.style.backgroundImage = 'url(../imagens/Background_Metro/Hollow.jpg)'
            break
        case 1:
            document.body.style.backgroundImage = 'url(../imagens/Background_Metro/Messenger.jpg)'
            break
        case 2:
            document.body.style.backgroundImage = 'url(../imagens/Background_Metro/Ori.jpg)'
            break
        case 3:
            document.body.style.backgroundImage = 'url(../imagens/Background_Metro/Rain.jpg)'
            break
        case 4:
            document.body.style.backgroundImage = 'url(../imagens/Background_Metro/Blas.jpg)'
            break
        case 5:
            document.body.style.backgroundImage = 'url(../imagens/Background_Metro/Blood.jpg)'
            break
    }

    switch(x){
        case 0:
            $('nav#principal').removeClass()
            $('nav#principal').addClass('navbar navbar-expand-sm hollow')

            $('nav#lista-lateral li').removeClass()
            $('nav#lista-lateral li').addClass('item-lateral hollow-lateral')

            $('footer').removeClass()
            $('footer').addClass('fixed-bottom hollow')
            break
        case 1:
            $('nav#principal').removeClass()
            $('nav#principal').addClass('navbar navbar-expand-sm messenger')

            $('nav#lista-lateral li').removeClass()
            $('nav#lista-lateral li').addClass('item-lateral messenger-lateral')

            $('footer').removeClass()
            $('footer').addClass('fixed-bottom messenger')
            break
        case 2:
            $('nav#principal').removeClass()
            $('nav#principal').addClass('navbar navbar-expand-sm ori')

            $('nav#lista-lateral li').removeClass()
            $('nav#lista-lateral li').addClass('item-lateral ori-lateral')

            $('footer').removeClass()
            $('footer').addClass('fixed-bottom ori')
            break
        case 3:
            $('nav#principal').removeClass()
            $('nav#principal').addClass('navbar navbar-expand-sm rain')

            $('nav#lista-lateral li').removeClass()
            $('nav#lista-lateral li').addClass('item-lateral rain-lateral')

            $('footer').removeClass()
            $('footer').addClass('fixed-bottom rain')
            break
        case 4:
            $('nav#principal').removeClass()
            $('nav#principal').addClass('navbar navbar-expand-sm blas')

            $('nav#lista-lateral li').removeClass()
            $('nav#lista-lateral li').addClass('item-lateral blas-lateral')

            $('footer').removeClass()
            $('footer').addClass('fixed-bottom blas')
            break
        case 5:
            $('nav#principal').removeClass()
            $('nav#principal').addClass('navbar navbar-expand-sm blood')

            $('nav#lista-lateral li').removeClass()
            $('nav#lista-lateral li').addClass('item-lateral blood-lateral')

            $('footer').removeClass()
            $('footer').addClass('fixed-bottom blood')
            break
    }
}

//Função >> muda o estilo de acorda que volta de jogo
function FundoVem(){
    if(x <= 0){
        x = listas - 1
    } else {
        x--
    }
    
    switch(x){
        case 0:
            document.body.style.backgroundImage = 'url(../imagens/Background_Metro/Hollow.jpg)'
            break
        case 1:
            document.body.style.backgroundImage = 'url(../imagens/Background_Metro/Messenger.jpg)'
            break
        case 2:
            document.body.style.backgroundImage = 'url(../imagens/Background_Metro/Ori.jpg)'
            break
        case 3:
            document.body.style.backgroundImage = 'url(../imagens/Background_Metro/Rain.jpg)'
            break
        case 4:
            document.body.style.backgroundImage = 'url(../imagens/Background_Metro/Blas.jpg)'
            break
        case 5:
            document.body.style.backgroundImage = 'url(../imagens/Background_Metro/Blood.jpg)'
            break
    }

    switch(x){
        case 0:
            $('nav#principal').removeClass()
            $('nav#principal').addClass('navbar navbar-expand-sm hollow')

            $('nav#lista-lateral li').removeClass()
            $('nav#lista-lateral li').addClass('item-lateral hollow-lateral')

            $('footer').removeClass()
            $('footer').addClass('fixed-bottom hollow')
            break
        case 1:
            $('nav#principal').removeClass()
            $('nav#principal').addClass('navbar navbar-expand-sm messenger')

            $('nav#lista-lateral li').removeClass()
            $('nav#lista-lateral li').addClass('item-lateral messenger-lateral')

            $('footer').removeClass()
            $('footer').addClass('fixed-bottom messenger')
            break
        case 2:
            $('nav#principal').removeClass()
            $('nav#principal').addClass('navbar navbar-expand-sm ori')

            $('nav#lista-lateral li').removeClass()
            $('nav#lista-lateral li').addClass('item-lateral ori-lateral')

            $('footer').removeClass()
            $('footer').addClass('fixed-bottom ori')
            break
        case 3:
            $('nav#principal').removeClass()
            $('nav#principal').addClass('navbar navbar-expand-sm rain')

            $('nav#lista-lateral li').removeClass()
            $('nav#lista-lateral li').addClass('item-lateral rain-lateral')

            $('footer').removeClass()
            $('footer').addClass('fixed-bottom rain')
            break
        case 4:
            $('nav#principal').removeClass()
            $('nav#principal').addClass('navbar navbar-expand-sm blas')

            $('nav#lista-lateral li').removeClass()
            $('nav#lista-lateral li').addClass('item-lateral blas-lateral')

            $('footer').removeClass()
            $('footer').addClass('fixed-bottom blas')
            break
        case 5:
            $('nav#principal').removeClass()
            $('nav#principal').addClass('navbar navbar-expand-sm blood')

            $('nav#lista-lateral li').removeClass()
            $('nav#lista-lateral li').addClass('item-lateral blood-lateral')

            $('footer').removeClass()
            $('footer').addClass('fixed-bottom blood')
            break
    }

}

//Botões embaixo de Download + Laterais
function FundoHollow(){
    x = 0
    document.body.style.backgroundImage = 'url(../imagens/Background_Metro/Hollow.jpg)'

    $('nav#principal').removeClass()
    $('nav#principal').addClass('navbar navbar-expand-sm hollow')

    $('nav#lista-lateral li').removeClass()
    $('nav#lista-lateral li').addClass('item-lateral hollow-lateral')

    $('footer').removeClass()
    $('footer').addClass('fixed-bottom hollow')
}

function FundoMessenger(){
    x = 1
    document.body.style.backgroundImage = 'url(../imagens/Background_Metro/Messenger.jpg)'

    $('nav#principal').removeClass()
    $('nav#principal').addClass('navbar navbar-expand-sm messenger')

    $('nav#lista-lateral li').removeClass()
    $('nav#lista-lateral li').addClass('item-lateral messenger-lateral')

    $('footer').removeClass()
    $('footer').addClass('fixed-bottom messenger')
}

function FundoOri(){
    x = 2
    document.body.style.backgroundImage = 'url(../imagens/Background_Metro/Ori.jpg)'

    $('nav#principal').removeClass()
    $('nav#principal').addClass('navbar navbar-expand-sm ori')

    $('nav#lista-lateral li').removeClass()
    $('nav#lista-lateral li').addClass('item-lateral ori-lateral')

    $('footer').removeClass()
    $('footer').addClass('fixed-bottom ori')
}

function FundoRain(){
    x = 3
    document.body.style.backgroundImage = 'url(../imagens/Background_Metro/Rain.jpg)'

    $('nav#principal').removeClass()
    $('nav#principal').addClass('navbar navbar-expand-sm rain')

    $('nav#lista-lateral li').removeClass()
    $('nav#lista-lateral li').addClass('item-lateral rain-lateral')

    $('footer').removeClass()
    $('footer').addClass('fixed-bottom rain')
}

function FundoBlas(){
    x = 4
    document.body.style.backgroundImage = 'url(../imagens/Background_Metro/Blas.jpg)'

    $('nav#principal').removeClass()
    $('nav#principal').addClass('navbar navbar-expand-sm blas')

    $('nav#lista-lateral li').removeClass()
    $('nav#lista-lateral li').addClass('item-lateral blas-lateral')

    $('footer').removeClass()
    $('footer').addClass('fixed-bottom blas')
}

function FundoBlood(){
    x = 5
    document.body.style.backgroundImage = 'url(../imagens/Background_Metro/Blood.jpg)'

    $('nav#principal').removeClass()
    $('nav#principal').addClass('navbar navbar-expand-sm blood')

    $('nav#lista-lateral li').removeClass()
    $('nav#lista-lateral li').addClass('item-lateral blood-lateral')

    $('footer').removeClass()
    $('footer').addClass('fixed-bottom blood')
}

