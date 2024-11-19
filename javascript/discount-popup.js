function openPopup() {
    const popup = document.getElementById("popupOverlay");
    popup.classList.add("active");
}

function closePopup() {
    const popup = document.getElementById("popupOverlay");
    popup.classList.remove("active");
    const popupContent = document.querySelector(".popup-content");
}

document.getElementById("popupOverlay").addEventListener("click", function (event) {
    if (event.target === this) {
        closePopup();
    }
});


const applyButtons = document.querySelectorAll('.submit-discount');
const discountText = document.getElementById('discount-text');


applyButtons.forEach(button => {
    button.addEventListener('click', () => {

        const discount = button.getAttribute('data-discount');

        const discountParagraph = discountText.querySelector('p');

        if (discountParagraph) {
            discountParagraph.textContent = `${discount}%`;
        } else {
            const newParagraph = document.createElement('p');
            newParagraph.textContent = `${discount}%`;
            discountText.appendChild(newParagraph);
        }
    });
});