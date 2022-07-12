
let slid = document.getElementsByClassName('slider__item');
let next = document.getElementsByClassName('slider__arrow_next');
let prev = document.getElementsByClassName('slider__arrow_prev');
let dot = document.getElementsByClassName('slider__dot');
let images = document.getElementsByTagName('img');
let index = 0;
dot[index].classList.add('slider__dot_active');

function clicker(n) {
    for (let i = 0; i < images.length; i++) {
        slid[i].classList.remove('slider__item_active');
        dot[i].classList.remove('slider__dot_active'); 
    }
    if (next) {       
        index += n;
    }
    if(index > images.length -1) {
        index = 0;
    }
    if(index < 0) {
        index = images.length -1;
    }
    slid[index].classList.add('slider__item_active');
    dot[index].classList.add('slider__dot_active');    
}

function clickerNext() { 
    clicker(1)
}

function clickerPrev() {
    clicker(-1)
}

for (let i = 0; i < next.length; i++) {
    next[i].onclick = clickerNext;
}
for (let i = 0; i < prev.length; i++) {
    prev[i].onclick = clickerPrev;
}
