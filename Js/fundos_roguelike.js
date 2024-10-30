document.body.style.backgroundImage = 'url(../imagens/Background_Roguelike/Dead_Cells.jpg)'

var listas = document.querySelectorAll('li[data-slide-to]').length
var x = 0

//Barra Lateral Inicial
$('.item-lateral').addClass('dead-lateral')

//Função >> muda o estilo de acorda que passa de jogo
function FundoVai(){
    if(x >= listas - 1){
        x = 0
    } else {
        x++
    }

    switch(x){
        case 0:
            document.body.style.backgroundImage = 'url(../imagens/Background_Roguelike/Dead_Cells.jpg)'
            break
        case 1:
            document.body.style.backgroundImage = 'url(../imagens/Background_Roguelike/Moonlighter.jpg)'
            break
        case 2:
            document.body.style.backgroundImage = 'url(../imagens/Background_Roguelike/Enter.jpg)'
            break
        case 3:
            document.body.style.backgroundImage = 'url(../imagens/Background_Roguelike/Darkest.jpg)'
            break
        case 4:
            document.body.style.backgroundImage = 'url(../imagens/Background_Roguelike/Mana.jpg)'
            break
        case 5:
            document.body.style.backgroundImage = 'url(../imagens/Background_Roguelike/Noita.jpg)'
            break
    }

    switch(x){
        case 0:
            $('nav#principal').removeClass()
            $('nav#principal').addClass('navbar navbar-expand-sm dead')

            $('nav#lista-lateral li').removeClass()
            $('nav#lista-lateral li').addClass('item-lateral dead-lateral')

            $('footer').removeClass()
            $('footer').addClass('fixed-bottom dead')
            break
        case 1:
            $('nav#principal').removeClass()
            $('nav#principal').addClass('navbar navbar-expand-sm moon')

            $('nav#lista-lateral li').removeClass()
            $('nav#lista-lateral li').addClass('item-lateral moon-lateral')

            $('footer').removeClass()
            $('footer').addClass('fixed-bottom moon')
            break
        case 2:
            $('nav#principal').removeClass()
            $('nav#principal').addClass('navbar navbar-expand-sm enter')

            $('nav#lista-lateral li').removeClass()
            $('nav#lista-lateral li').addClass('item-lateral enter-lateral')

            $('footer').removeClass()
            $('footer').addClass('fixed-bottom enter')
            break
        case 3:
            $('nav#principal').removeClass()
            $('nav#principal').addClass('navbar navbar-expand-sm dark')

            $('nav#lista-lateral li').removeClass()
            $('nav#lista-lateral li').addClass('item-lateral dark-lateral')

            $('footer').removeClass()
            $('footer').addClass('fixed-bottom dark')
            break
        case 4:
            $('nav#principal').removeClass()
            $('nav#principal').addClass('navbar navbar-expand-sm mana')

            $('nav#lista-lateral li').removeClass()
            $('nav#lista-lateral li').addClass('item-lateral mana-lateral')

            $('footer').removeClass()
            $('footer').addClass('fixed-bottom mana')
            break
        case 5:
            $('nav#principal').removeClass()
            $('nav#principal').addClass('navbar navbar-expand-sm noita')

            $('nav#lista-lateral li').removeClass()
            $('nav#lista-lateral li').addClass('item-lateral noita-lateral')

            $('footer').removeClass()
            $('footer').addClass('fixed-bottom noita')
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
            document.body.style.backgroundImage = 'url(../imagens/Background_Roguelike/Dead_Cells.jpg)'
            break
        case 1:
            document.body.style.backgroundImage = 'url(../imagens/Background_Roguelike/Moonlighter.jpg)'
            break
        case 2:
            document.body.style.backgroundImage = 'url(../imagens/Background_Roguelike/Enter.jpg)'
            break
        case 3:
            document.body.style.backgroundImage = 'url(../imagens/Background_Roguelike/Darkest.jpg)'
            break
        case 4:
            document.body.style.backgroundImage = 'url(../imagens/Background_Roguelike/Mana.jpg)'
            break
        case 5:
            document.body.style.backgroundImage = 'url(../imagens/Background_Roguelike/Noita.jpg)'
            break
    }

    switch(x){
        case 0:
            $('nav#principal').removeClass()
            $('nav#principal').addClass('navbar navbar-expand-sm dead')

            $('nav#lista-lateral li').removeClass()
            $('nav#lista-lateral li').addClass('item-lateral dead-lateral')

            $('footer').removeClass()
            $('footer').addClass('fixed-bottom dead')
            break
        case 1:
            $('nav#principal').removeClass()
            $('nav#principal').addClass('navbar navbar-expand-sm moon')

            $('nav#lista-lateral li').removeClass()
            $('nav#lista-lateral li').addClass('item-lateral moon-lateral')

            $('footer').removeClass()
            $('footer').addClass('fixed-bottom moon')
            break
        case 2:
            $('nav#principal').removeClass()
            $('nav#principal').addClass('navbar navbar-expand-sm enter')

            $('nav#lista-lateral li').removeClass()
            $('nav#lista-lateral li').addClass('item-lateral enter-lateral')

            $('footer').removeClass()
            $('footer').addClass('fixed-bottom enter')
            break
        case 3:
            $('nav#principal').removeClass()
            $('nav#principal').addClass('navbar navbar-expand-sm dark')

            $('nav#lista-lateral li').removeClass()
            $('nav#lista-lateral li').addClass('item-lateral dark-lateral')

            $('footer').removeClass()
            $('footer').addClass('fixed-bottom dark')
            break
        case 4:
            $('nav#principal').removeClass()
            $('nav#principal').addClass('navbar navbar-expand-sm mana')

            $('nav#lista-lateral li').removeClass()
            $('nav#lista-lateral li').addClass('item-lateral mana-lateral')

            $('footer').removeClass()
            $('footer').addClass('fixed-bottom mana')
            break
        case 5:
            $('nav#principal').removeClass()
            $('nav#principal').addClass('navbar navbar-expand-sm noita')

            $('nav#lista-lateral li').removeClass()
            $('nav#lista-lateral li').addClass('item-lateral noita-lateral')

            $('footer').removeClass()
            $('footer').addClass('fixed-bottom noita')
            break
    }

}

//Botões embaixo de Download + Laterais
function FundoDead(){
    x = 0

    document.body.style.backgroundImage = 'url(../imagens/Background_Roguelike/Dead_Cells.jpg)'

    $('nav#principal').removeClass()
    $('nav#principal').addClass('navbar navbar-expand-sm dead')

    $('nav#lista-lateral li').removeClass()
    $('nav#lista-lateral li').addClass('item-lateral dead-lateral')

    $('footer').removeClass()
    $('footer').addClass('fixed-bottom dead')
}

function FundoMoon(){
    x = 1

    document.body.style.backgroundImage = 'url(../imagens/Background_Roguelike/Moonlighter.jpg)'

    $('nav#principal').removeClass()
    $('nav#principal').addClass('navbar navbar-expand-sm moon')

    $('nav#lista-lateral li').removeClass()
    $('nav#lista-lateral li').addClass('item-lateral moon-lateral')

    $('footer').removeClass()
    $('footer').addClass('fixed-bottom moon')
}

function FundoEnter(){
    x = 2

    document.body.style.backgroundImage = 'url(../imagens/Background_Roguelike/Enter.jpg)'
    
    $('nav#principal').removeClass()
    $('nav#principal').addClass('navbar navbar-expand-sm enter')

    $('nav#lista-lateral li').removeClass()
    $('nav#lista-lateral li').addClass('item-lateral enter-lateral')

    $('footer').removeClass()
    $('footer').addClass('fixed-bottom enter')
}

function FundoDark(){
    x = 3

    document.body.style.backgroundImage = 'url(../imagens/Background_Roguelike/Darkest.jpg)'
    
    $('nav#principal').removeClass()
    $('nav#principal').addClass('navbar navbar-expand-sm dark')

    $('nav#lista-lateral li').removeClass()
    $('nav#lista-lateral li').addClass('item-lateral dark-lateral')

    $('footer').removeClass()
    $('footer').addClass('fixed-bottom dark')
}

function FundoMana(){
    x = 4

    document.body.style.backgroundImage = 'url(../imagens/Background_Roguelike/Mana.jpg)'
    
    $('nav#principal').removeClass()
    $('nav#principal').addClass('navbar navbar-expand-sm mana')

    $('nav#lista-lateral li').removeClass()
    $('nav#lista-lateral li').addClass('item-lateral mana-lateral')

    $('footer').removeClass()
    $('footer').addClass('fixed-bottom mana')
}

function FundoNoita(){
    x = 5

    document.body.style.backgroundImage = 'url(../imagens/Background_Roguelike/Noita.jpg)'
    
    $('nav#principal').removeClass()
    $('nav#principal').addClass('navbar navbar-expand-sm noita')

    $('nav#lista-lateral li').removeClass()
    $('nav#lista-lateral li').addClass('item-lateral noita-lateral')

    $('footer').removeClass()
    $('footer').addClass('fixed-bottom noita')
}
