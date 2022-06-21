const servicesNavigateLeftButton = document.querySelector('.body-container-third-header-other-navigate-button.left');
const servicesNavigateRightButton = document.querySelector('.body-container-third-header-other-navigate-button.right');
const servicesCards = document.querySelector('.body-container-third-cards');
const upButton = document.querySelector('.body-form-header-up-button');

servicesNavigateLeftButton.addEventListener('click', () => {
    servicesCards.scrollBy({
        left: -400,
        behavior: "smooth"
    });    
});

servicesNavigateRightButton.addEventListener('click', () => {    
    servicesCards.scrollBy({
        left: 400,
        behavior: "smooth"
    });    
});

upButton.addEventListener('click', () => {
    window.scrollTo({
        top: '100%',
        behavior: "smooth"
    })
})

