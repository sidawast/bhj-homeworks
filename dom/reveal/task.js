let divReveal = document.getElementsByClassName('reveal');

function reveal(el) {

    const {top, bottom} = el.getBoundingClientRect();

    if (bottom < 0) {
        el.classList.remove('reveal_active')
        return false;
    }

    if (top > window.innerHeight) {
        el.classList.remove('reveal_active')
        return false
    } else {
        el.classList.add('reveal_active');
    }
    return true;
}

setInterval(() => {
    for (let i = 0; i < divReveal.length; i++) {       
        reveal(divReveal[i]);
    }
},300)