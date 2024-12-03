function showText() {
    const text = document.getElementById('text');
    text.classList.add('show');
}

// Function to toggle the dropdown visibility
function toggleDropdown() {
    const dropdown = document.getElementById('addressDropdown');
    dropdown.style.display = dropdown.style.display === 'block' ? 'none' : 'block';
}

// Function to change the delivery address and hide the dropdown
function changeAddress(newAddress) {
    const deliveryText = document.getElementById('deliveryText');
    deliveryText.innerHTML = `<p><span><b>${newAddress}</b></span><br>${newAddress}, Việt Nam</p>`;
    // Hide the dropdown after selecting the address
    const dropdown = document.getElementById('addressDropdown');
    dropdown.style.display = 'none';
}

