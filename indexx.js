function showSideBar(){
    const sideBar = document.querySelector('.navigation-side-bar');
    sideBar.style.display = 'flex';
}
function closeSideBar(){
    const sideBar = document.querySelector('.navigation-side-bar');
    sideBar.style.display = 'none';
}


const navLinkEls = document.querySelectorAll('.button');

navLinkEls.forEach(navLinkEl => {
    navLinkEl.addEventListener('click', () => {
        document.querySelector('.active')?.classList.remove('active');
        navLinkEl.classList.add('active');
    });
});


let buttonOne = document.querySelector('.next');
let buttonTwo = document.querySelector('.prev');

buttonOne.addEventListener('click', function(){
    let sections = document.querySelectorAll('.section-spring');
    document.querySelector('.spring-section').appendChild(sections[0]);
})
buttonTwo.addEventListener('click', function(){
    let sections = document.querySelectorAll('.section-spring');
    document.querySelector('.spring-section').prepend(sections[sections.length - 1]);
})
buttonOne.addEventListener('click', function(){
    let sections = document.querySelectorAll('.section-summer');
    document.querySelector('.summer-section').appendChild(sections[0]);
})
buttonTwo.addEventListener('click', function(){
    let sections = document.querySelectorAll('.section-summer');
    document.querySelector('.summer-section').prepend(sections[sections.length - 1]);
})

let springButton = document.querySelector('.spring');
let sidespringButton = document.querySelector('.side-spring-button');
let sidesummerButton = document.querySelector('.side-summer-button');
let sidefallButton = document.querySelector('.side-fall-button');
let sidewinterButton = document.querySelector('.side-winter-button');
let springSection = document.querySelector('.spring-section');
let summerButton = document.querySelector('.summer');
let summerSection = document.querySelector('.summer-section');

springButton.addEventListener('click', function(){
    summerSection.style.display = 'none';
    springSection.style.display = 'block';
})
sidespringButton.addEventListener('click', function(){
    summerSection.style.display = 'none';
    springSection.style.display = 'block';
})

summerButton.addEventListener('click', function(){
    summerSection.style.display = 'block';
    springSection.style.display = 'none';
})
sidesummerButton.addEventListener('click', function(){
    summerSection.style.display = 'block';
    springSection.style.display = 'none';
})
