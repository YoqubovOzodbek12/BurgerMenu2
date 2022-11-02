let header__btn = document.querySelector('.header__btn');
let header__nav = document.querySelector('.header__nav')
let overlay = document.querySelector('.overlay')

header__btn.addEventListener( 'click', function(){
    header__btn.classList.toggle('active')
    header__nav.classList.toggle('header__nav--active')
    overlay.classList.toggle('overlay--active')
});

overlay.addEventListener('click' , function() {
    header__btn.classList.toggle('active')
    header__nav.classList.toggle('header__nav--active')
    overlay.classList.toggle('overlay--active')
})