const fixedHeader = document.querySelector(".fixedHeader");
const fadeoutText = document.querySelector(".fadeout");
const pages = document.querySelector(".pages");
const home = document.querySelector(".home");
const homeBtn = document.querySelector("footer").offsetTop;
const pageBtn = document.querySelector(".animationBtn").offsetTop;

pages.addEventListener("click",()=>{
    window.scroll({top: document.querySelector(".animationBtn").offsetTop, behavior: 'smooth'});
});

home.addEventListener("click",()=>{
    window.scroll({top: document.querySelector(".mainHeader").offsetTop, behavior: 'smooth'});
});

document.addEventListener("DOMContentLoaded",()=>{
    AOS.init();
    new TypeIt('#typing')
        .pause(1000)
        .go();
});

