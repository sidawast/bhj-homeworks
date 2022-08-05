let block = document.querySelectorAll('.product');

block.forEach(function(elem) {
	  elem.addEventListener("click", func)	    
	  

function func(event) {
  let butControl = event.target;
  let quantity = Number(butControl.parentElement.querySelector('.product__quantity-value').textContent);
  let elem = butControl.closest('.product');
  const id = elem.attributes['data-id'].value;
  const image = elem.querySelector('img').attributes.src.value;
  const product = document.querySelector('.cart__products');

  if(butControl.className.includes('product__quantity-control_inc')) {
    quantity += 1; 
    butControl.previousElementSibling.textContent = quantity;
  }
  if(butControl.className.includes('product__quantity-control_dec') && butControl.nextElementSibling.textContent > 1) {
    quantity -= 1; 
    butControl.nextElementSibling.textContent = quantity;
  }

  if(butControl.className.includes('product__add')) {
       
      let productCheck = document.querySelectorAll('.cart__product');

      let xProduct = Array.from(productCheck).find(product => product.dataset.id === id);

      if (xProduct) {
        num = Number(xProduct.querySelector('.cart__product-count').textContent);  
        return xProduct.querySelector('.cart__product-count').textContent = quantity + num;                   
      } 
      if(xProduct == undefined) {  
        inner(product, id, image, quantity) }         
      }    
}
});
function inner(product, id, image, quantity) {

    product.insertAdjacentHTML("beforeEnd",`
    <div class="cart__product" data-id=`+ id +`>
    <img class="cart__product-image" src="`+ image +`">
    <div class="cart__product-count">`+ quantity +`</div>
    </div>
    `)
}