//Fundo Inicial
document.body.style.backgroundImage = 'url(../imagens/Background_Farm/Stardew.jpg)'

var listas = document.querySelectorAll('li[data-slide-to]').length
var x = 0

//Barra Lateral Inicial
$('.item-lateral').addClass('stardew-lateral')

//Função >> muda o estilo de acorda que passa de jogo
function FundoVai(){
  
    if(x >= (listas - 1)){
        x = 0
    } else {
        x++
    }

    switch(x){
        case 0:
            document.body.style.backgroundImage = 'url(../imagens/Background_Farm/Stardew.jpg)'
            break
        case 1:
            document.body.style.backgroundImage = 'url(../imagens/Background_Farm/Grave.jpg)'
            break
        case 2:
            document.body.style.backgroundImage = 'url(../imagens/Background_Farm/Slime.jpg)'
            break
        case 3:
            document.body.style.backgroundImage = 'url(../imagens/Background_Farm/Potion.jpg)'
            break
    }

    switch(x){
        case 0:
            $('nav#principal').removeClass()
            $('nav#principal').addClass('navbar navbar-expand-sm stardew')

            $('nav#lista-lateral li').removeClass()
            $('nav#lista-lateral li').addClass('item-lateral stardew-lateral')

            $('footer').removeClass()
            $('footer').addClass('fixed-bottom stardew')
            break
        case 1:
            $('nav#principal').removeClass()
            $('nav#principal').addClass('navbar navbar-expand-sm grave')

            $('nav#lista-lateral li').removeClass()
            $('nav#lista-lateral li').addClass('item-lateral grave-lateral')

            $('footer').removeClass()
            $('footer').addClass('fixed-bottom grave')
            break
        case 2:
            $('nav#principal').removeClass()
            $('nav#principal').addClass('navbar navbar-expand-sm slime')

            $('nav#lista-lateral li').removeClass()
            $('nav#lista-lateral li').addClass('item-lateral slime-lateral')

            $('footer').removeClass()
            $('footer').addClass('fixed-bottom slime')
            break
        case 3:
            $('nav#principal').removeClass()
            $('nav#principal').addClass('navbar navbar-expand-sm potion')

            $('nav#lista-lateral li').removeClass()
            $('nav#lista-lateral li').addClass('item-lateral potion-lateral')

            $('footer').removeClass()
            $('footer').addClass('fixed-bottom potion')
            break
    } 
}

function FundoStardew(){
    x = 0

    document.body.style.backgroundImage = 'url(../imagens/Background_Farm/Stardew.jpg)'

    $('nav#principal').removeClass()
    $('nav#principal').addClass('navbar navbar-expand-sm stardew')

    $('nav#lista-lateral li').removeClass()
    $('nav#lista-lateral li').addClass('item-lateral stardew-lateral')

    $('footer').removeClass()
    $('footer').addClass('fixed-bottom stardew')
}

function FundoGrave(){
    x = 1

    document.body.style.backgroundImage = 'url(../imagens/Background_Farm/Grave.jpg)'

    $('nav#principal').removeClass()
    $('nav#principal').addClass('navbar navbar-expand-sm grave')

    $('nav#lista-lateral li').removeClass()
    $('nav#lista-lateral li').addClass('item-lateral grave-lateral')

    $('footer').removeClass()
    $('footer').addClass('fixed-bottom grave')
}

function FundoSlime(){
    x = 3

    document.body.style.backgroundImage = 'url(../imagens/Background_Farm/Slime.jpg)'

    $('nav#principal').removeClass()
    $('nav#principal').addClass('navbar navbar-expand-sm slime')

    $('nav#lista-lateral li').removeClass()
    $('nav#lista-lateral li').addClass('item-lateral slime-lateral')

    $('footer').removeClass()
    $('footer').addClass('fixed-bottom slime')
}

function FundoPotion(){
    x = 4

    document.body.style.backgroundImage = 'url(../imagens/Background_Farm/Potion.jpg)'

    $('nav#principal').removeClass()
    $('nav#principal').addClass('navbar navbar-expand-sm potion')

    $('nav#lista-lateral li').removeClass()
    $('nav#lista-lateral li').addClass('item-lateral potion-lateral')

    $('footer').removeClass()
    $('footer').addClass('fixed-bottom potion')
}