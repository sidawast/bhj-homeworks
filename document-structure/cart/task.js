
let block = document.querySelectorAll('.product');

block.forEach(function(elem) {
	  elem.addEventListener("click", func)	    
	  });

function func() {
  let a = event.target;
  let quantity = Number(a.parentElement.querySelector('.product__quantity-value').textContent);
  if(a.className.includes('product__quantity-control_inc')) {
    quantity += 1; 
    a.previousElementSibling.textContent = quantity;
  }
  if(a.className.includes('product__quantity-control_dec') && a.nextElementSibling.textContent >0) {
    quantity -= 1; 
    a.nextElementSibling.textContent = quantity;
  }
  if(a.className.includes('product__add')) {
    let product = document.querySelector('.cart__products');
    let el = a;
    while(el = el.parentElement) {
        if(el.className == 'product') {
        let id = el.attributes['data-id'].value;
        let image = el.querySelector('img').attributes.src.value; 
        
        let productCheck = document.querySelectorAll('.cart__product');
        if (productCheck.length > 0) {
            productCheck.forEach(function(elem) {
                if(elem.attributes['data-id'].value == id) {
                    let num = Number(elem.querySelector('.cart__product-count').textContent);
                    quantity += num;
                    elem.remove();
                    inner(product, id, image, quantity)
                }
            });      
        } else {         
            inner(product, id, image, quantity, 0)
            }                   
        }
    }    
  }
}

function inner(product, id, image, quantity) {

    product.innerHTML += `
    <div class="cart__product" data-id=`+ id +`>
    <img class="cart__product-image" src="`+ image +`">
    <div class="cart__product-count">`+ quantity +`</div>
    </div>
    `
}