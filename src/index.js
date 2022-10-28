import initialPageLoad from "./initalPageLoad";
import loadMenu from "./menu";
import loadContact from './contact';
import './css/style.css';

function createHeader() {
    const header = document.createElement('div');
    header.textContent = 'The Salty Splitoon';
    return header
}

function createBtn(text){
    const btn = document.createElement('button');
    btn.classList.add('btn')
    btn.textContent = text;
    return btn
}

function createNavBar(){
    const navBar = document.createElement('div');
    navBar.setAttribute('class', 'nav')
    
    const homeBtn = createBtn('home')
    homeBtn.classList.add('home-btn')

    const menuBtn = createBtn('menu');
    menuBtn.classList.add('menu-btn')

    const contactBtn = createBtn('contact')
    contactBtn.classList.add('contact-btn')

    navBar.appendChild(homeBtn);
    navBar.appendChild(menuBtn);
    navBar.appendChild(contactBtn);
    return navBar
}

let content  = document.querySelector('#content');

const header = createHeader();
header.classList.add('header')
content.appendChild(header);

const navBar = createNavBar();
navBar.classList.add('nav');
content.appendChild(navBar);


const homeBtn = document.querySelector('.home-btn');
homeBtn.addEventListener('click', () =>{
    if (document.querySelector('.contact-container')) {
        content.removeChild(document.querySelector('.contact-container'))
    }
    if (document.querySelector('.menu-container')) {
        content.removeChild(document.querySelector('.menu-container'))
    }
    if (document.querySelector('.home-container')) {
        content.removeChild(document.querySelector('.home-container'))
    }

    initialPageLoad()
})

const menuBtn = document.querySelector('.menu-btn')
menuBtn.addEventListener('click', () =>{
    if (document.querySelector('.contact-container')) {
        content.removeChild(document.querySelector('.contact-container'))
    }
    if (document.querySelector('.menu-container')) {
        content.removeChild(document.querySelector('.menu-container'))
    }
    if (document.querySelector('.home-container')) {
        content.removeChild(document.querySelector('.home-container'))
    }
    loadMenu()
})

const contactBtn = document.querySelector('.contact-btn')
contactBtn.addEventListener('click', () =>{
    if (document.querySelector('.contact-container')) {
        content.removeChild(document.querySelector('.contact-container'))
    }
    if (document.querySelector('.menu-container')) {
        content.removeChild(document.querySelector('.menu-container'))
    }
    if (document.querySelector('.home-container')) {
        content.removeChild(document.querySelector('.home-container'))
    }
    loadContact()
})