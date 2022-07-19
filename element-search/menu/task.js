let elem = document.getElementsByClassName("menu__item");


function open() {
   
let elCopy = document.getElementsByClassName('menu_active');
let menuSubCopy = Array.from(elCopy);

let el = this.children;
let menuSub = Array.from(el);

close();

if(el.length > 1) {

   for (let i = 0; i < menuSub.length; i++){
      
      if (menuSub[i].className.includes('menu menu_sub')) {
         el[i].classList.add('menu_active')
      } 
   }
   for (let i = 0; i < menuSubCopy.length; i++){
      
      if (menuSubCopy[i].className.includes('menu menu_sub menu_active')) {
         for (let i = 0; i < menuSub.length; i++){
            
            if (menuSub[i].className.includes('menu menu_sub menu_active')) {
               el[i].classList.remove('menu_active') }}
            } 
         }
         return false;
      }
}

function close() {
   let clos = document.getElementsByClassName('menu_active');
   for (let i = 0; i < clos.length; i++) {
      clos[i].classList.remove('menu_active');
  }
}
 
for (let i = 0; i < elem.length; i++) {
    elem[i].onclick = open;
}
