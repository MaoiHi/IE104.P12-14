document.addEventListener("DOMContentLoaded", function () {
    const cart = JSON.parse(sessionStorage.getItem("cart")) || []; 
    const orderFoodContainer = document.querySelector(".order-food"); 

    
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


    


    
    cart.forEach((product) => {
        const productDiv = document.createElement("div");
        productDiv.classList.add("order-item");
        productDiv.innerHTML = `
            
                <p>${product.quantity} x ${product.name}</p>
                <p>${product.price}</p>
            
        `;
        orderFoodContainer.appendChild(productDiv);
    });

  
    updateTotal();
    updateTotal1();
});
