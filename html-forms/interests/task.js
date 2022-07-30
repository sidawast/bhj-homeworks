/*let interestItems = document.querySelectorAll('input[type="checkbox"]');

const nodeArray = (selector, parent=document) => [].slice.call(parent.querySelectorAll(selector));
const allThings = nodeArray('input');

for (let i = 0; i < interestItems.length; i++) {
    interestFlag(interestItems[i]);
    }

function interestFlag(elem) {
    elem.addEventListener("change", flag);
}

function flag() {
    let a = event.target;
    let item = a.parentNote;
    let parent = a.parentElement.parentElement;
    let children = parent.querySelectorAll('input[type="checkbox"]');
    children.forEach(child => child.checked = a.checked);
    console.log(children);
    /*
    while(item = item.parentElement) {
        let x = item.querySelector('input')
        if(x != a) {
            item.querySelector('input[type="checkbox"]').indeterminate = a.checked;
            console.log(item);
        }

    }
    
    //event.preventDefault();
}
*/
const nodeArray = (selector, parent=document) => [].slice.call(parent.querySelectorAll(selector));

const allThings = nodeArray('input');

addEventListener('change', e => {
  let check = e.target;
 
  if(allThings.indexOf(check) === -1) return;

  const children = check.parentElement.parentElement;
  if(children.className == 'interest') {
    let arrElem = children.querySelectorAll('input[type="checkbox"]')
    
        arrElem.forEach((item) => item.checked = check.checked)
    
  }
  while(check){
        
    const parent   = (check.closest(['ul']).parentNode).querySelector('input');
    const siblings = nodeArray('input', parent.closest('li').querySelector(['ul']));

    
    const checkStatus = siblings.map(check => check.checked);
    const every  = checkStatus.every(Boolean);
    const some = checkStatus.some(Boolean);   
    
    
    parent.checked = every;   
    parent.indeterminate = !every && every !== some;

    check = check != parent ? parent : 0;
  }
})