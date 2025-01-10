// Select elements
let menu = document.querySelector('#menu-btn');
let navbar = document.querySelector('.navbar');
let loginBtn = document.querySelector('#login-btn');
let loginFormContainer = document.querySelector('.login-form-container');
let closeLoginForm = document.querySelector('#close-login-form');
let header = document.querySelector('.header');

// Toggle navbar
menu.onclick = () => {
    menu.classList.toggle('fa-times');
    navbar.classList.toggle('active');
};

// Toggle login form
loginBtn.onclick = () => {
    loginFormContainer.classList.toggle('active');
};

// Close login form
closeLoginForm.onclick = () => {
    loginFormContainer.classList.remove('active');
};

// Sticky header
window.onscroll = () => {
    header.classList.toggle('active', window.scrollY > 0);
    menu.classList.remove('fa-times');
    navbar.classList.remove('active');
};

document.querySelector('.home').onmousemove = (e) =>{
    document.querySelectorAll('.home-parallax').forEach(elm =>{
        let speed = elm.getAttribute('.data-speed');

        let x = (window.innerWidth - e.pageX * speed) / 90;
        let y = (window.innerWidth - e.pagey * speed) / 90;

        elm.computedStyleMap.transform = 'translateX(${y}px) translateY(${x}px)';
    });

};


document.querySelector('.home').onmousemove = () =>{
    document.querySelectorAll('.home-parallax').forEach(elm =>{

        elm.computedStyleMap.transform = 'translateX(0px) translateY(0px)';
    });

}
