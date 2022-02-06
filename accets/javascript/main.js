let popupLogin = document.querySelector('.popupLogin')
let showed = document.querySelector('.shadow')
let controleBlock = document.querySelector('.container__controle')
let colseBtn = document.querySelector('.colseBTN')
let iMag = document.querySelector('.container__image')
let topList = document.querySelector('.dopCategoric')
let Set = document.querySelector('#c7')


showed.style.display = 'none'



function colse(){
    showed.style.display = 'none'
    iMag.style.display = 'inline'
    colseBtn.style.display = 'none'
    Set.style.display = 'block'
    topList.style.display = 'none'

}
  

controleBlock.addEventListener('click', () => {
    Set.style.display = 'none'
    topList.style.display = 'block'
    showed.style.display = 'block'
    iMag.style.display = 'none'
    colseBtn.style.display = 'block'

});


setInterval(function(){
    popupLogin.style.display = 'block'

}
, 10000)
