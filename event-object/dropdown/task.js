let elem = document.getElementsByClassName("dropdown__value");
let list = document.getElementsByClassName("dropdown__list");
let item = document.getElementsByClassName("dropdown__item");
 
function clickItem() {
  let key = this.children
  if(key) {
    for (let i = 0; i < elem.length; i++) {
      elem[i].textContent = key[0].textContent;
    }
    list[0].classList.remove('dropdown__list_active');
  }
  event.preventDefault()
}

function clicker() { 
  for (let i = 0; i < list.length; i++) {
     list[i].classList.add('dropdown__list_active');
  }
}

function start(element, func) {
  for (let i = 0; i < element.length; i++) {
    element[i].addEventListener("click", func, false);
  }
}

start(elem, clicker);
start(item, clickItem);