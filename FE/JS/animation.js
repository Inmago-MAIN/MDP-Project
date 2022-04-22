document.querySelector(".logo").addEventListener("click",()=>{
    window.scroll({top: 0 ,behavior: 'smooth'});
})

document.querySelector(".pages").addEventListener("click",()=>{
    window.scroll({top: 2000 ,behavior: 'smooth'});
});

document.querySelector(".home").addEventListener("click",()=>{
    window.scroll({top: 0 , behavior: 'smooth'});
});

document.addEventListener("DOMContentLoaded",()=>{
    AOS.init();
    new TypeIt('#typing')
        .pause(1000)
        .go();
});

