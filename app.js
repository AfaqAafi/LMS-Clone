let header = document.querySelector('header');

window.addEventListener("scroll", ()=>{
    
    header.classList.toggle('stickey', window.scrollY > 0)

})
let menuBtn = document.querySelector('#menu-btn');
let navbar = document.querySelector('.navbar');

menuBtn.addEventListener("click", ()=>{
    menuBtn.classList.toggle('bx-x');
    navbar.classList.toggle('open');

})
window.onscroll = ()=>{
    menuBtn.classList.remove('bx-x');
    navbar.classList.remove('open');
    
}
