const myImage = document.querySelector('.myimage');
const physics = document.querySelector('.physics');
const navHome = document.querySelector('.nav__home');
const navAboutMe = document.querySelector('.nav__aboutme');
const navGallery = document.querySelector('.nav__Gallery');
const home = document.querySelector('.home');
const AboutMe = document.querySelector('.AboutMe');
const Gallery = document.querySelector('.Gallery');

let time = 'present';


myImage.addEventListener('click', () => {
    if(time === 'present') {
        myImage.src = 'highschool.jpeg';
        time = 'highschool';
    } else if(time === 'highschool') {
        myImage.src = 'myimage.jpeg';
        time = 'present';
    }

});

navHome.addEventListener('click', () => {
    home.scrollIntoView({behavior: "smooth"});
});

navAboutMe.addEventListener('click', () => {
    AboutMe.scrollIntoView({behavior: "smooth", block:"center"});
});

navGallery.addEventListener('click', () => {
    Gallery.scrollIntoView({behavior:'smooth'})
});

physics.addEventListener('click', () => {
    myImage.src = 'physics.jpeg';
});
