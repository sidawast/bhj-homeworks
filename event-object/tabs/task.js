
let tables = document.getElementById('tabs1');
let table = document.getElementsByClassName('tab');
let tableNav = document.getElementsByClassName('tab__navigation');
let content = document.getElementsByClassName('tab__content');

for (let i = 0; i < table.length; i++) {
    openStart(table[i]);  
}

function openStart(func) {
    func.addEventListener('click', open);
}

function close() {
    for (let i = 0; i < table.length; i++) {
    table[i].classList.remove('tab_active');
    content[i].classList.remove('tab__content_active')
    }
}

function open() {
    close();
    let a = event.target;
    a.classList.add('tab_active');
    console.log(a);
    let arr = Array.from(table); 
        for (let i = 0; i < arr.length; i++) {
        if(arr[i].className.includes('tab tab_active')) {
            content[i].classList.add('tab__content_active')
        }
    }     
}