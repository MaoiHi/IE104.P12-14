// Lấy các phần tử cần thiết
const addToCartBtn = document.getElementById('add-to-cart');
const cartCount = document.querySelector('.cart-count');

// Biến để lưu số lượng sản phẩm trong giỏ
let cartQuantity = 0;

// Sự kiện click vào nút "Thêm vào giỏ hàng"
addToCartBtn.addEventListener('click', function () {
    // Tăng số lượng giỏ hàng
    cartQuantity++;

    // Hiển thị số lượng trên icon giỏ hàng
    cartCount.textContent = cartQuantity;
    cartCount.style.display = 'flex'; // Hiển thị số lượng
});
