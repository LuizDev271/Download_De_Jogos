//Fundo Inicial
document.body.style.backgroundImage = 'url(imagens/Background/Forager.jpg)'
document.body.style.backgroundColor = 'black'

var listas = document.querySelectorAll('li[data-slide-to]').length
var x = 0

//Barra Lateral Inicial
$('.item-lateral').addClass('forager-lateral')

//Links Laterais + Indicadores Carrosel
$('[data-slide-to]').attr('data-target', '#carousel')

//Links Download
$('.link-download').attr('target', '_blank')
$('[type="button"]').attr('onfocus', 'corBotao()').attr('onblur', 'botaoNormal()')

//Função >> muda o estilo de acorda que passa de jogo
function FundoVai(){
  
    if(x >= (listas - 1)){
        x = 0
    } else {
        x++
    }

    switch(x){
        case 0:
            document.body.style.backgroundImage = 'url(imagens/Background/Forager.jpg)'
            break
        case 1:
            document.body.style.backgroundImage = 'url(imagens/Background/Reventure.jpg)'
            break
        case 2:
            document.body.style.backgroundImage = 'url(imagens/Background/Punch.jpg)'
            break
        case 3:
            document.body.style.backgroundImage = 'url(imagens/Background/Raft.jpg)'
            break
        case 4:
            document.body.style.backgroundImage = 'url(imagens/Background/Sub.jpg)'
            break
        case 5:
            document.body.style.backgroundImage = ''
            break
    }

    switch(x){
        case 0:
            $('nav#principal').removeClass()
            $('nav#principal').addClass('navbar navbar-expand-sm forager')

            $('nav#lista-lateral li').removeClass()
            $('nav#lista-lateral li').addClass('item-lateral forager-lateral')

            $('footer').removeClass()
            $('footer').addClass('fixed-bottom forager')
            break
        case 1:
            $('nav#principal').removeClass()
            $('nav#principal').addClass('navbar navbar-expand-sm reven')

            $('nav#lista-lateral li').removeClass()
            $('nav#lista-lateral li').addClass('item-lateral reven-lateral')

            $('footer').removeClass()
            $('footer').addClass('fixed-bottom reven')
            break
        case 2:
            $('nav#principal').removeClass()
            $('nav#principal').addClass('navbar navbar-expand-sm punch')

            $('nav#lista-lateral li').removeClass()
            $('nav#lista-lateral li').addClass('item-lateral punch-lateral')

            $('footer').removeClass()
            $('footer').addClass('fixed-bottom punch')
            break
        case 3:
            $('nav#principal').removeClass()
            $('nav#principal').addClass('navbar navbar-expand-sm raft')

            $('nav#lista-lateral li').removeClass()
            $('nav#lista-lateral li').addClass('item-lateral raft-lateral')

            $('footer').removeClass()
            $('footer').addClass('fixed-bottom raft')
            break
        case 4:
            $('nav#principal').removeClass()
            $('nav#principal').addClass('navbar navbar-expand-sm sub')

            $('nav#lista-lateral li').removeClass()
            $('nav#lista-lateral li').addClass('item-lateral sub-lateral')

            $('footer').removeClass()
            $('footer').addClass('fixed-bottom sub')
            break
        case 5:
            $('nav#principal').removeClass()
            $('nav#principal').addClass('navbar navbar-expand-sm happy')

            $('nav#lista-lateral li').removeClass()
            $('nav#lista-lateral li').addClass('item-lateral happy-lateral')

            $('footer').removeClass()
            $('footer').addClass('fixed-bottom happy')
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
            document.body.style.backgroundImage = 'url(imagens/Background/Forager.jpg)'
            break
        case 1:
            document.body.style.backgroundImage = 'url(imagens/Background/Reventure.jpg)'
            break
        case 2:
            document.body.style.backgroundImage = 'url(imagens/Background/Punch.jpg)'
            break
        case 3:
            document.body.style.backgroundImage = 'url(imagens/Background/Raft.jpg)'
            break
        case 4:
            document.body.style.backgroundImage = 'url(imagens/Background/Sub.jpg)'
            break
        case 5:
            document.body.style.backgroundImage = ''
            break
    }

    switch(x){
        case 0:
            $('nav#principal').removeClass()
            $('nav#principal').addClass('navbar navbar-expand-sm forager')

            $('nav#lista-lateral li').removeClass()
            $('nav#lista-lateral li').addClass('item-lateral forager-lateral')

            $('footer').removeClass()
            $('footer').addClass('fixed-bottom forager')
            break
        case 1:
            $('nav#principal').removeClass('punch')
            $('nav#principal').addClass('reven')
            
            $('nav#lista-lateral li').removeClass('punch-lateral')
            $('nav#lista-lateral li').addClass('reven-lateral')
            
            $('footer').removeClass('punch')
            $('footer').addClass('reven')
            break
        case 2:
            $('nav#principal').removeClass('stardew')
            $('nav#principal').addClass('punch')
            
            $('nav#lista-lateral li').removeClass('stardew-lateral')
            $('nav#lista-lateral li').addClass('punch-lateral')
            
            $('footer').removeClass('stardew')
            $('footer').addClass('punch')
            break
        case 3:
            $('nav#principal').removeClass('grave')
            $('nav#principal').addClass('stardew')
            
            $('nav#lista-lateral li').removeClass('grave-lateral')
            $('nav#lista-lateral li').addClass('stardew-lateral')
            
            $('footer').removeClass('grave')
            $('footer').addClass('stardew')
            break
        case 4:
            $('nav#principal').removeClass('happy')
            $('nav#principal').addClass('grave')
            
            $('nav#lista-lateral li').removeClass('happy-lateral')
            $('nav#lista-lateral li').addClass('grave-lateral')
            
            $('footer').removeClass('happy')
            $('footer').addClass('grave')
            break
        case 5:
            $('nav#principal').removeClass('forager')
            $('nav#principal').addClass('happy')
            
            $('nav#lista-lateral li').removeClass('forager-lateral')
            $('nav#lista-lateral li').addClass('happy-lateral')
            
            $('footer').removeClass('forager')
            $('footer').addClass('happy')
            break
    }
}

//Botões embaixo de Download + Laterais
function FundoForager(){
    x = 0

    document.body.style.backgroundImage = 'url(imagens/Background/Forager.jpg)'

    $('nav#principal').removeClass()
    $('nav#principal').addClass('navbar navbar-expand-sm forager')

    $('nav#lista-lateral li').removeClass()
    $('nav#lista-lateral li').addClass('item-lateral forager-lateral')

    $('footer').removeClass()
    $('footer').addClass('fixed-bottom forager')
}

function FundoReven(){
    x = 1

    document.body.style.backgroundImage = 'url(imagens/Background/Reventure.jpg)'

    $('nav#principal').removeClass()
    $('nav#principal').addClass('navbar navbar-expand-sm reven')

    $('nav#lista-lateral li').removeClass()
    $('nav#lista-lateral li').addClass('item-lateral reven-lateral')

    $('footer').removeClass()
    $('footer').addClass('fixed-bottom reven')
}

function FundoRaft(){ //
    x = 2

    document.body.style.backgroundImage = 'url(imagens/Background/Raft.jpg)'

    $('nav#principal').removeClass()
    $('nav#principal').addClass('navbar navbar-expand-sm raft')

    $('nav#lista-lateral li').removeClass()
    $('nav#lista-lateral li').addClass('item-lateral raft-lateral')

    $('footer').removeClass()
    $('footer').addClass('fixed-bottom raft')
}

function FundoSub(){ //
    x = 2

    document.body.style.backgroundImage = 'url(imagens/Background/Sub.jpg)'

    $('nav#principal').removeClass()
    $('nav#principal').addClass('navbar navbar-expand-sm sub')

    $('nav#lista-lateral li').removeClass()
    $('nav#lista-lateral li').addClass('item-lateral sub-lateral')

    $('footer').removeClass()
    $('footer').addClass('fixed-bottom sub')
}

function FundoPunch(){
    x = 2

    document.body.style.backgroundImage = 'url(imagens/Background/Punch.jpg)'

    $('nav#principal').removeClass()
    $('nav#principal').addClass('navbar navbar-expand-sm punch')

    $('nav#lista-lateral li').removeClass()
    $('nav#lista-lateral li').addClass('item-lateral punch-lateral')

    $('footer').removeClass()
    $('footer').addClass('fixed-bottom punch')
}

function FundoHappy(){
    x = 5

    document.body.style.backgroundImage = ''

    $('nav#principal').removeClass()
    $('nav#principal').addClass('navbar navbar-expand-sm happy')

    $('nav#lista-lateral li').removeClass()
    $('nav#lista-lateral li').addClass('item-lateral happy-lateral')

    $('footer').removeClass()
    $('footer').addClass('fixed-bottom happy')
}