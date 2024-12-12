const footerTitles = document.querySelectorAll('.footer-title');

footerTitles.forEach((title) => {
    title.addEventListener('click', () => {
        title.classList.toggle('open');

       
        const list = title.nextElementSibling;
        if (list.style.display === 'block') {
            list.style.display = 'none'; 
        } else {
            list.style.display = 'block'; 
        }
    });
});
