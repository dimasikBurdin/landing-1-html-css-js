const express = require('express');
const app = express();
const path = require('path');
const port = process.env.PORT || 8080;

// const servicesNavigateLeftButton = document.querySelector('.body-container-third-header-other-navigate-button.left');
// const servicesNavigateRightButton = document.querySelector('.body-container-third-header-other-navigate-button.right');
// const servicesCards = document.querySelector('.body-container-third-cards');
// const upButton = document.querySelector('.body-form-header-up-button');

app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname + '/index.html'));    
});

app.listen(port, () => {
    console.log(`listening on port ${port}!`)
    console.log(__dirname)
});

app.use(express.static(__dirname + '/'));

// servicesNavigateLeftButton.addEventListener('click', () => {
//     servicesCards.scrollBy({
//         left: -400,
//         behavior: "smooth"
//     });    
// });

// servicesNavigateRightButton.addEventListener('click', () => {    
//     servicesCards.scrollBy({
//         left: 400,
//         behavior: "smooth"
//     });    
// });

// upButton.addEventListener('click', () => {
//     window.scrollTo({
//         top: '100%',
//         behavior: "smooth"
//     })
// })

