document.addEventListener("DOMContentLoaded", function () {
    const cart = JSON.parse(localStorage.getItem("cart")) || []; // Lấy giỏ hàng từ Local Storage
    const orderFoodContainer = document.querySelector(".order-food"); // Vị trí hiển thị danh sách món
    const order = document.querySelector("order-button");

    // Hàm cập nhật tổng giá
    function updateTotal() {
        let total = cart.reduce((sum, item) => {
            return sum + item.quantity * parseInt(item.price.replace(".", "").replace("đ", ""));
        }, 0);

        document.querySelector(".total-box .price").innerText = `${total.toLocaleString()}đ`;
    }

    function updateTotal1() {
        let total = cart.reduce((sum, item) => {
            return sum + item.quantity * parseInt(item.price.replace(".", "").replace("đ", ""));
        }, 0);

        document.querySelector(".price").innerText = `${total.toLocaleString()}đ`;
    }


    if(order){
        localStorage.removeItem("cart");
    }


    // Hiển thị sản phẩm trong giỏ
    cart.forEach((product) => {
        const productDiv = document.createElement("div");
        productDiv.classList.add("order-item");
        productDiv.innerHTML = `
            
                <p>${product.quantity} x ${product.name}</p>
                <p>${product.price}</p>
            
        `;
        orderFoodContainer.appendChild(productDiv);
    });

    // Cập nhật tổng giá
    updateTotal();
    updateTotal1();
});
