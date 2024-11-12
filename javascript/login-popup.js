function openPopup() {
    const popup = document.getElementById("popupOverlay");
    popup.classList.add("active");
}

function closePopup() {
    const popup = document.getElementById("popupOverlay");
    popup.classList.remove("active");
    const popupContent = document.querySelector(".popup-content");
}

document.getElementById("popupOverlay").addEventListener("click", function(event) {
    if (event.target === this) {
        closePopup();
    }
});

function loggedIn() {
    window.location.href = 'home-logged-in.html';
}