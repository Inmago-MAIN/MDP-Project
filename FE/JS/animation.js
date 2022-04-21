const fixedHeader = document.querySelector(".fixedHeader");
const fadeoutText = document.querySelector(".fadeout");

document.addEventListener("DOMContentLoaded",()=>{
    AOS.init();
    new TypeIt('#typing')
        .pause(1000)
        .go();
});