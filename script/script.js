
'use strict'

{const menubtn = document.getElementById("JS-btn");
const nav = document.getElementById("JS-nav");

menubtn.addEventListener("click",() => { 
    nav.classList.toggle("active");
    menubtn.classList.toggle("active");
});

nav.addEventListener("click",()=>{
    nav.classList.remove("active");
    menubtn.classList.remove("active");

});
const targetElement = document.querySelectorAll(".slide");
console.log(targetElement)
document.addEventListener("scroll",function(){
    for (let i = 0; i < targetElement.length; i++) {
        const getElementDistance = targetElement[i].
        getBoundingClientRect().top+ targetElement[i].clientHeight * .6
        if(window.innerHeight > getElementDistance){
            targetElement[i].classList.add("show");
        }
    }  
})

const targetballoonleft = document.querySelectorAll(".item-left");
const targetballoonright = document.querySelectorAll(".item-right")

document.addEventListener("scroll",function(){
    for (let i = 0; i < targetballoonleft.length; i++) {
        const getElementDistance = targetballoonleft[i].
        getBoundingClientRect().top+ targetballoonleft[i].clientHeight * .6
        if(window.innerHeight > getElementDistance){
            targetballoonleft[i].classList.add("balloon");
        }
    }  
})

document.addEventListener("scroll",function(){
    for (let i = 0; i < targetballoonright.length; i++) {
        const getElementDistance = targetballoonright[i].
        getBoundingClientRect().top+ targetballoonright[i].clientHeight * .6
        if(window.innerHeight > getElementDistance){
            targetballoonright[i].classList.add("balloon");
        }
    }  
})
};

