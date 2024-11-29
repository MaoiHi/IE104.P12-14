document.addEventListener("DOMContentLoaded", () => {
    const modal = document.getElementById("product-detail-modal");
    const closeButton = modal.querySelector(".close-button");

    // Modal elements
    const modalImage = document.getElementById("modal-product-image");
    const modalName = document.getElementById("modal-product-name");
    const modalDescription = document.getElementById("modal-product-description");
    const modalPrice = document.getElementById("modal-product-price");
    const modalQuantity = document.getElementById("modal-product-quantity");
    const modalNote = document.getElementById("modal-product-note");

    // Buttons for quantity
    const decreaseQuantity = document.getElementById("decrease-quantity");
    const increaseQuantity = document.getElementById("increase-quantity");

    // Add to cart button
    const addToCartButton = document.getElementById("add-to-cart");

    let currentProduct = null; // Sản phẩm hiện tại

    // Hiển thị modal và cập nhật thông tin sản phẩm
    document.querySelectorAll(".add-button").forEach(button => {
        button.addEventListener("click", (event) => {
            const productId = parseInt(event.target.getAttribute("data-product-id"));
            currentProduct = products.find(p => p.id === productId);

            if (currentProduct) {
                modalImage.src = currentProduct.image;
                modalName.innerText = currentProduct.name;
                modalDescription.innerText = currentProduct.description;
                modalPrice.innerText = currentProduct.price;
                modalQuantity.innerText = currentProduct.quantity;
                modalNote.value = currentProduct.note;

                modal.classList.remove("hidden");
            }
        });
    });

    // Xử lý tăng/giảm số lượng
    decreaseQuantity.addEventListener("click", () => {
        if (currentProduct && currentProduct.quantity > 1) {
            currentProduct.quantity--;
            modalQuantity.innerText = currentProduct.quantity;
        }
    });

    increaseQuantity.addEventListener("click", () => {
        if (currentProduct) {
            currentProduct.quantity++;
            modalQuantity.innerText = currentProduct.quantity;
        }
    });

    // Xử lý ghi chú
    modalNote.addEventListener("input", (event) => {
        if (currentProduct) {
            currentProduct.note = event.target.value;
        }
    });

    // Thêm sản phẩm vào giỏ hàng
    addToCartButton.addEventListener("click", () => {
        if (currentProduct) {
            console.log("Sản phẩm được thêm vào giỏ hàng:", currentProduct);
            alert(`${currentProduct.name} đã được thêm vào giỏ hàng!`);
        }
        modal.classList.add("hidden");
    });

    // Đóng modal
    closeButton.addEventListener("click", () => {
        modal.classList.add("hidden");
    });

    window.addEventListener("click", (event) => {
        if (event.target === modal) {
            modal.classList.add("hidden");
        }
    });
});
