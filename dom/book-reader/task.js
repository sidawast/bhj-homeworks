
let tag = document.querySelectorAll('a.font-size');
let content = document.querySelectorAll('.book__content');
//let colorText = document.querySelectorAll('.color')

function open() {
    let a = event.target;
   // if(a.parentElement.classList[0] == 'book__control') {
        reset();

        a.classList.add('font-size_active');
        content[0].classList.add(a.classList[1]);
        console.log(a);
  //  }
    event.preventDefault();
}

for (let i = 0; i < tag.length; i++) {
    clickTag(tag[i]);

}

function clickTag(func) {
    func.addEventListener('click', open);
}

function reset() {
    for (let i = 0; i < tag.length; i++) {
        tag[i].classList.remove('font-size_active');
        content[0].className = 'book__content';
    }
}