function showText() {
    const text = document.getElementById('text');
    text.classList.add('show');
}


function toggleDropdown() {
    const dropdown = document.getElementById('addressDropdown');
    dropdown.style.display = dropdown.style.display === 'block' ? 'none' : 'block';
}


function changeAddress(newAddress) {
    const deliveryText = document.getElementById('deliveryText');
    deliveryText.innerHTML = `<p><span><b>${newAddress}</b></span><br>${newAddress}, Việt Nam</p>`;
    const dropdown = document.getElementById('addressDropdown');
    dropdown.style.display = 'none';
}

