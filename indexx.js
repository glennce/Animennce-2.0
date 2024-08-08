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


const buttonOne = document.querySelector('.button-one');
const buttonTwo = document.querySelector('.button-two');
const buttonThree = document.querySelector('.button-three');
const buttonFour = document.querySelector('.button-four');

const sectionone = document.getElementById('section-one');
const sectiontwo = document.getElementById('section-two');
const sectionthree = document.getElementById('section-three');
const sectionfour = document.getElementById('section-four');

buttonOne.addEventListener('click', function() {
    sectionone.style.display = 'grid';
    sectiontwo.style.display = 'none';
    sectionthree.style.display = 'none';
    sectionfour.style.display = 'none';
})
buttonTwo.addEventListener('click', function() {
    sectionone.style.display = 'none';
    sectiontwo.style.display = 'grid';
    sectionthree.style.display = 'none';
    sectionfour.style.display = 'none';
})
buttonThree.addEventListener('click', function() {
    sectionone.style.display = 'none';
    sectiontwo.style.display = 'none';
    sectionthree.style.display = 'grid';
    sectionfour.style.display = 'none';
})
buttonFour.addEventListener('click', function() {
    sectionone.style.display = 'none';
    sectiontwo.style.display = 'none';
    sectionthree.style.display = 'none';
    sectionfour.style.display = 'grid';
})
