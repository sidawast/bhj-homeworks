let elem = document.getElementsByClassName("menu__link");
let menuActive = document.getElementsByClassName('menu_active');

for (let i = 0; i < elem.length; i++) {
   elem[i].onclick = open;
}

function open() {

   let el = this;
   while(el = el.parentElement) {      
      if(el.classList.value.includes('menu__item') == true){
         let element = el.querySelector('.menu_sub');
         if(element != null) {
            element.classList.toggle('menu_active')
      } else {return true}       
   }          
   }                 
   return false
}