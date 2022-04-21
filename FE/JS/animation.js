const fixedHeader = document.querySelector(".fixedHeader");
const fadeoutText = document.querySelector(".fadeout");

document.addEventListener("DOMContentLoaded",()=>{
    AOS.init();
    new TypeIt('#typing')
        .type("저희는 MA:IN# 입니다!")
        .pause(1000)
        .go();
});
