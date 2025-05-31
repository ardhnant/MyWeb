let cartQuantity = 0;
function addToCart(pkg){
 newCartQuantity = cartQuantity + pkg;

 if (newCartQuantity > 10) {
  alert('Cart Quantity Exceeding.');
  return;
 } else if ( newCartQuantity < 0){
  alert('Add a product, Genius.')
  return;
 }
 cartQuantity = newCartQuantity;
 
 console.log(`Cart Quantity: ${cartQuantity}`);
}

function showCartQuantity(){
  document.querySelector('.show-cart-quantity').innerText = `Cart Quantity: ${cartQuantity}`;
}

function reset(){
  cartQuantity = 0;
  document.querySelector('.show-cart-quantity').innerText = `Cart Quantity: ${cartQuantity}`;
}