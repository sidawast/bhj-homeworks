
let block = document.querySelectorAll('.product');

block.forEach(function(elem) {
	  elem.addEventListener("click", func)	    
	  });

function func() {
  let butControl = event.target;
  let quantity = Number(butControl.parentElement.querySelector('.product__quantity-value').textContent);
  if(butControl.className.includes('product__quantity-control_inc')) {
    quantity += 1; 
    butControl.previousElementSibling.textContent = quantity;
  }
  if(butControl.className.includes('product__quantity-control_dec') && butControl.nextElementSibling.textContent > 1) {
    quantity -= 1; 
    butControl.nextElementSibling.textContent = quantity;
  }

  if(butControl.className.includes('product__add')) {

    let product = document.querySelector('.cart__products');
    let el = butControl;
    while(el = el.parentElement) {
      
      if(el.className == 'product') {
      let id = el.attributes['data-id'].value;
      let image = el.querySelector('img').attributes.src.value;         
      let productCheck = document.querySelectorAll('.cart__product');

      let xProduct = Array.from(productCheck).find(getCharacter(id));

      if (xProduct) {
        num = Number(xProduct.querySelector('.cart__product-count').textContent);  
        return xProduct.querySelector('.cart__product-count').textContent = quantity + num;                   
      } else {  
        inner(product, id, image, quantity) }              
      }
    }    
  }
}

function getCharacter(id) {
  return product => product.dataset.id === id;
}

function inner(product, id, image, quantity) {

    product.insertAdjacentHTML("beforeEnd",`
    <div class="cart__product" data-id=`+ id +`>
    <img class="cart__product-image" src="`+ image +`">
    <div class="cart__product-count">`+ quantity +`</div>
    </div>
    `)
}