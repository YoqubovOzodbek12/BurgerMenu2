let header__btn = document.querySelector('.header__btn');
let header__nav = document.querySelector('.header__nav')
let overflyo = document.querySelector('.overflyo')

header__btn.addEventListener( 'click', function(){
    header__btn.classList.toggle('active')
    header__nav.classList.toggle('header__nav--active')
    overflyo.classList.toggle('overflyo--active')
});

overflyo.addEventListener( 'click' , function() {
    header__btn.classList.toggle('active')
    header__nav.classList.toggle('header__nav--active')
    overflyo.classList.toggle('overflyo--active')
})