document.addEventListener("DOMContentLoaded", () => {
    const modal = document.getElementById("product-detail-modal");
    const closeButton = modal.querySelector(".close-button");

    
    const modalImage = document.getElementById("modal-product-image");
    const modalName = document.getElementById("modal-product-name");
    const modalDescription = document.getElementById("modal-product-description");
    const modalPrice = document.getElementById("modal-product-price");
    const modalQuantity = document.getElementById("modal-product-quantity");
    const modalNote = document.getElementById("modal-product-note");

   
    const decreaseQuantity = document.getElementById("decrease-quantity");
    const increaseQuantity = document.getElementById("increase-quantity");

    
    const addToCartButton = document.getElementById("add-to-cart");

    let currentProduct = null; 

    
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

    
    modalNote.addEventListener("input", (event) => {
        if (currentProduct) {
            currentProduct.note = event.target.value;
        }
    });

   
    addToCartButton.addEventListener("click", () => {
        if (currentProduct) {
            console.log("Sản phẩm được thêm vào giỏ hàng:", currentProduct);
            Swal.fire({
                icon: 'success', 
                title: 'Thành công!',
                text: `${currentProduct.name} đã được thêm vào giỏ hàng!`,
                confirmButtonText: 'OK',
                confirmButtonColor: '#3085d6',
            });
        }
        modal.classList.add("hidden");
    });


    closeButton.addEventListener("click", () => {
        modal.classList.add("hidden");
    });

    window.addEventListener("click", (event) => {
        if (event.target === modal) {
            modal.classList.add("hidden");
        }
    });
});
