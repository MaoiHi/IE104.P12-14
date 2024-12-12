const addToCartBtn = document.getElementById('add-to-cart');
const cartCount = document.querySelector('.cart-count');


let cartQuantity = 0;


addToCartBtn.addEventListener('click', function () {
    cartQuantity++;
  
    cartCount.textContent = cartQuantity;
    cartCount.style.display = 'flex'; 
});
