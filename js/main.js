const languageScroll = document.querySelector('.language');
const languageList = document.querySelector('.language__list');
const mobileNavBtns = document.querySelectorAll('.nav__mobile__btn');
const mobileNavList = document.querySelector('.menu');
const overlayMobile = document.querySelector('.overlay_mobile');
const navMobileLanguageBtn =document.querySelector('.nav__mobile__item_language__btn');
const navMobileLanguage = document.querySelector('.nav__mobile__language');



languageScroll.addEventListener('click', ()=>{
    languageList.classList.toggle('none')
})



const smoothLinks = document.querySelectorAll('a[href^="#"]');
for (let smoothLink of smoothLinks) {
    smoothLink.addEventListener('click', function (e) {
        e.preventDefault();
        const id = smoothLink.getAttribute('href');

        document.querySelector(id).scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    });
};



for(let button of mobileNavBtns) {
    button.addEventListener('click', ()=>{
        mobileNavList.classList.toggle('menu--close');
        overlayMobile.classList.toggle('overlay-mobile--active');
    })
}



navMobileLanguageBtn.addEventListener('click', ()=>{
    navMobileLanguage.classList.toggle('nav__mobile__language--active')
})
